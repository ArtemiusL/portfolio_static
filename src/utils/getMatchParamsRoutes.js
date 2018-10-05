import { matchPath } from 'react-router-dom';

import routesConfig from '../routes';

export const getActiveRouteIndex = (pathname, routes) => {
  const currentPathName = pathname.includes('?') ? pathname.split('?')[0] : pathname;

  return routes.findIndex((el) => {
    if (!el || (el && !el.path)) return false;

    if (currentPathName === '/' && el.path === '/') {
      return true;
    }

    return currentPathName.includes(el.path !== '/' && el.path.split('/')[1]);
  });
};

/* eslint-disable */
const getMatchParamsRoutes = (currentRoute) => {
  const { routes } = routesConfig[0];
  const activeIndex = getActiveRouteIndex(currentRoute, routes);

  if (activeIndex === -1) {
    return {};
  }

  return matchPath(currentRoute, { path: routes[activeIndex].path });
};

export default getMatchParamsRoutes;
