
import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import chalk from 'chalk';

import configureStore from './store';
import getInitalState from './store/getInitialState';
import renderHtml from './utils/renderHtml';
import appRoutes from './app-routes';
import assets from '../public/webpack-assets.json';
import { port } from './config';

const app = express();

// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));

if (!__DEV__) {
  app.use(express.static(path.resolve(process.cwd(), 'public')));
} else {
  /* Run express as webpack dev server */

  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const compiler = webpack(webpackConfig);

  compiler.apply(new webpack.ProgressPlugin());

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      quiet: true, // Turn it on for friendly-errors-webpack-plugin
      noInfo: true,
      stats: 'minimal',
    }),
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false, // Turn it off for friendly-errors-webpack-plugin
    }),
  );
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  (async () => {
    try {
      const staticContext = {};
      const history = createHistory();
      const initialState = getInitalState();
      const store = configureStore(history, initialState);

      const WebAppComponent = (
        <Provider store={store}>
          {/* Setup React-Router server-side rendering */}
          <StaticRouter location={req.path} context={staticContext}>
            {renderRoutes(appRoutes)}
          </StaticRouter>
        </Provider>
      );

      renderToString(WebAppComponent);
      const head = Helmet.renderStatic();

      // Pass the route and initial state into html template
      res
        .status(200)
        .send(
          renderHtml(
            head,
            assets,
          ),
        );
    } catch (err) {
      res.status(404).send('Not Found :(');
      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  app.listen(port, (err) => {
    const url = `http://localhost:${port}`;

    if (err) {
      console.error(`==> 😭  OMG!!! ${err}`);
    }

    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });
} else {
  console.error(chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified'));
}
