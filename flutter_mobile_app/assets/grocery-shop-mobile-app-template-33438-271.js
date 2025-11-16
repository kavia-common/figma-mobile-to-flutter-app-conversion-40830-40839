"use strict";
/*
Changelog (v2):
- Defer script execution; no layout-affecting logic to preserve pixel fidelity.
- Added unobtrusive focus-ring for keyboard users via class toggling (no inline styles).
- Kept JS minimal and non-blocking; avoids interfering with browser focus styles when using mouse.
*/

(function(){
  var root = document.documentElement;
  var usingKeyboard = false;

  function setUsingKeyboard(e){
    if (e.type === 'keydown') {
      if (!usingKeyboard) {
        usingKeyboard = true;
        root.classList.add('using-keyboard');
      }
    } else {
      if (usingKeyboard) {
        usingKeyboard = false;
        root.classList.remove('using-keyboard');
      }
    }
  }

  // Toggle a CSS class to enable visible focus outlines for keyboard users only
  window.addEventListener('keydown', setUsingKeyboard, {passive:true});
  window.addEventListener('mousedown', setUsingKeyboard, {passive:true});
  window.addEventListener('touchstart', setUsingKeyboard, {passive:true});

  // Make feature items keyboard-focusable
  var features = document.querySelectorAll('.feature');
  features.forEach(function(el){
    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex','0');
    }
  });
})();

/* Focus style driven by CSS class to avoid inline styles:
   html.using-keyboard .feature:focus { outline: 3px solid rgba(0,0,0,0.15); outline-offset: 2px; }
*/
