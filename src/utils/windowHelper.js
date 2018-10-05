const HTML = !__SERVER__ && document.documentElement;

export const getWindowWidth = () => (
  !__SERVER__ ? (
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  ) : 0
);

export const setWindowFontSize = (size) => {
  HTML.style.fontSize = `${size}px`;
};
