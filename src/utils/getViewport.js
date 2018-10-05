import {
  DESKTOP,
  TABLET,
  MOBILE,
} from '_constants';

export default (
  mediaMobile,
  mediaTablet,
) => {
  if (mediaMobile.matches) {
    return MOBILE;
  } else if (mediaTablet.matches) {
    return TABLET;
  } return DESKTOP;
};
