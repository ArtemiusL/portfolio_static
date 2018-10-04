import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import renderHtml from '../../src/utils/renderHtml';
import configureStore from '../../src/store';
import getInitalState from '../../src/store/getInitialState';

export default (routes, assets) => {
  const pagesToRender = routes[0].routes;

  const pages = pagesToRender
    .map(({ path, name }) => ({ path, name }));

  const staticContext = {};
  const history = createHistory();
  const initialState = getInitalState();
  const store = configureStore(history, initialState);

  return pages.map(({ path, name }) => {
    const ReactComponent = (
      <Provider store={store}>
        <StaticRouter location={path} context={staticContext}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    const componentHtml = renderToString(ReactComponent);
    const head = Helmet.renderStatic();

    const html = renderHtml(head, assets, componentHtml);

    return {
      path,
      name,
      html,
    };
  });
};
