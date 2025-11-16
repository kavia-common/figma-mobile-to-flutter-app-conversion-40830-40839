"use strict";
/**
 * Minimal, non-layout JS:
 * - Toggle focus visibility only for keyboard users by adding a class to <html>.
 * - No layout mutations to preserve pixel fidelity.
 */
(function(){
  var root = document.documentElement;
  var usingKeyboard = false;

  function setInputMode(e){
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

  window.addEventListener('keydown', setInputMode, {passive:true});
  window.addEventListener('mousedown', setInputMode, {passive:true});
  window.addEventListener('touchstart', setInputMode, {passive:true});
})();
