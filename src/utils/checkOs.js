import { IOS, ANDROID } from '_constants';

export default () => {
  let OSName = '';
  if (!__SERVER__) {
    if (navigator.userAgent.match(/Android/i)) OSName = ANDROID;
    if (navigator.userAgent.match(/iPhone/i)) OSName = IOS;
    if (navigator.userAgent.match(/iPad/i)) OSName = IOS;
    if (navigator.userAgent.match(/iPod/i)) OSName = IOS;
  }

  return OSName;
};
