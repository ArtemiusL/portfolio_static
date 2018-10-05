import {
  DESKTOP,
  MOBILE,
  TABLET,
} from '_constants';

export default (
  viewport,
  DesktopTemplate,
  TabletTemplate,
  MobileTemplate,
) => {
  switch (viewport) {
    case DESKTOP:
      return DesktopTemplate;

    case TABLET:
      return TabletTemplate;

    case MOBILE:
      return MobileTemplate;

    default:
      return DesktopTemplate;
  }
};
