"use strict";
/*
Minimal non-layout JS:
- Toggle a class on <html> to show focus rings for keyboard users only.
- Ensure feature items remain keyboard focusable.
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

  window.addEventListener('keydown', setUsingKeyboard, {passive:true, capture:false});
  window.addEventListener('mousedown', setUsingKeyboard, {passive:true, capture:false});
  window.addEventListener('touchstart', setUsingKeyboard, {passive:true, capture:false});

  // Make feature items tabbable if not already
  var features = document.querySelectorAll('.feature-item');
  features.forEach(function(el){
    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex','0');
    }
  });
})();
