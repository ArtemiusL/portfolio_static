
import path from 'path';
import _each from 'lodash/each';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import chalk from 'chalk';
import routes from './routes';
import { port } from './config';

const app = express();

// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));

app.use(express.static(path.resolve(process.cwd(), 'public')));

_each(routes, ({ path: routePath }) => {
  app.get(routePath, (req, res) => {
    res.sendFile(`${path.resolve(process.cwd(), 'public')}/${routePath}.html`);
  });
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
