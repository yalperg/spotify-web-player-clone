export default function debounce(fn, wait, immediate) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    let later = () => {
      timer = null;
      if (!immediate) fn.apply(context, args);
    };
    let callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}
