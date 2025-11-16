(function(){
  'use strict';

  // Utility: delegate events
  function on(root, selector, type, handler){
    root.addEventListener(type, function(e){
      const target = e.target.closest(selector);
      if(target && root.contains(target)){
        handler(e, target);
      }
    });
  }

  // Quantity buttons: increment/decrement text values safely
  const screen = document.getElementById('screen');
  if(screen){
    on(screen, '.qty-btn.minus', 'click', (e, btn)=>{
      const valEl = btn.parentElement.querySelector('.qty-val');
      if(!valEl) return;
      const n = Math.max(0, parseInt(valEl.textContent || '0', 10) - 1);
      valEl.textContent = String(n);
    });

    on(screen, '.qty-btn.plus', 'click', (e, btn)=>{
      const valEl = btn.parentElement.querySelector('.qty-val');
      if(!valEl) return;
      const n = parseInt(valEl.textContent || '0', 10) + 1;
      valEl.textContent = String(n);
    });

    // Click feedback for primary/secondary buttons
    on(screen, '.btn', 'click', (e, btn)=>{
      btn.setAttribute('aria-pressed', 'true');
      setTimeout(()=>btn.removeAttribute('aria-pressed'), 200);
    });
  }
})();
