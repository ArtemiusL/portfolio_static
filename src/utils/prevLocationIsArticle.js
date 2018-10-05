export default () => {
  if (!window.previousLocation) {
    return false;
  } return window.previousLocation.pathname.indexOf('articles') !== -1;
};
