"use strict";
/*
Grocery Shop Mobile App Template UI Category (screen_801:2452)
- Minimal, non-blocking JS
- Keyboard focus class toggling for visible outlines
- Simple tab activation semantics (no layout shift)
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

  window.addEventListener('keydown', setUsingKeyboard, {passive:true});
  window.addEventListener('mousedown', setUsingKeyboard, {passive:true});
  window.addEventListener('touchstart', setUsingKeyboard, {passive:true});

  // Tab activation (ARIA current)
  var tabs = document.querySelectorAll('.tabs .tab');
  function activateTab(btn){
    tabs.forEach(function(t){
      t.classList.remove('active');
      t.removeAttribute('aria-current');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-current', 'page');
  }
  tabs.forEach(function(t){
    t.addEventListener('click', function(){ activateTab(t); }, {passive:true});
    // Ensure keyboard accessibility
    if (!t.hasAttribute('tabindex')) {
      t.setAttribute('tabindex', '0');
    }
    t.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateTab(t);
      }
    });
  });

  // Ensure focusable elements have tabindex if needed
  document.querySelectorAll('.focusable').forEach(function(el){
    if (!el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }
  });
})();
