"use strict";
/*
  Minimal, non-layout JavaScript:
  - Toggle visible focus outlines only for keyboard users by adding/removing a class on <html>.
  - No DOM layout mutations to preserve pixel-perfect fidelity from CSS.
*/
(function(){
  var root = document.documentElement;
  var usingKeyboard = false;

  function setInputMode(e){
    if(e.type === 'keydown'){
      if(!usingKeyboard){
        usingKeyboard = true;
        root.classList.add('using-keyboard');
      }
    }else{
      if(usingKeyboard){
        usingKeyboard = false;
        root.classList.remove('using-keyboard');
      }
    }
  }

  window.addEventListener('keydown', setInputMode, {passive:true});
  window.addEventListener('mousedown', setInputMode, {passive:true});
  window.addEventListener('touchstart', setInputMode, {passive:true});
})();
