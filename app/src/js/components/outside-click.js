
export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener(events, handleOutsideClick));
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(events, handleOutsideClick);
      callback();
    }
  }  
}