export default () => {
  if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
    if (/OS [1-10](.*) like Mac OS X/i.test(navigator.userAgent)) {
      // версия ниже 10, то есть iphone 5 и ниже
      return false;
    }
    // всё что выше iphone 5
    return true;
  }
  // соответственно если не ios вообще не рыпаемся :)
  return true;
};
