"use strict";
/*
Orders (screen 755:2712)
- Minimal, non-blocking JS.
- Adds 'using-keyboard' class on <html> when keyboard is used to enable clear focus outlines.
- Keeps tabs/buttons keyboard accessible without layout shifts.
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

  // Tabs: set aria-current and visual current state
  var tabs = document.querySelectorAll('.tabs .tab');
  function activateTab(btn){
    tabs.forEach(function(t){
      t.classList.remove('current');
      t.removeAttribute('aria-current');
    });
    btn.classList.add('current');
    btn.setAttribute('aria-current', 'page');
  }
  tabs.forEach(function(t){
    t.addEventListener('click', function(){ activateTab(t); }, {passive:true});
    // Keyboard activation
    t.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateTab(t);
      }
    });
    // Ensure tabbable
    if (!t.hasAttribute('tabindex')) {
      t.setAttribute('tabindex', '0');
    }
  });
})();
