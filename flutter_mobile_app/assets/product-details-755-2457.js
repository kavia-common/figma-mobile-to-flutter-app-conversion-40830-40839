"use strict";
/*
Product details (screen 755:2457)
- Minimal, non-layout JS:
  * Toggle focus outline for keyboard users only
  * Accessible expanders (Nutritional facts, Reviews)
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

  // Expanders
  function toggleExpander(btn){
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    var panelId = btn.getAttribute('aria-controls');
    var panel = panelId ? document.getElementById(panelId) : null;
    btn.setAttribute('aria-expanded', String(!expanded));
    if (panel) {
      if (expanded) {
        panel.hidden = true;
      } else {
        panel.hidden = false;
      }
    }
  }

  document.querySelectorAll('.expander-header').forEach(function(btn){
    // Ensure keyboard interaction
    if (!btn.hasAttribute('tabindex')) {
      btn.setAttribute('tabindex', '0');
    }
    btn.addEventListener('click', function(){ toggleExpander(btn); }, {passive:true});
    btn.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpander(btn);
      }
    });
  });
})();
