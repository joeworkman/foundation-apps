var el = document.querySelector('#slidey-panel');
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var els = document.querySelectorAll('.small-slide-out-6, .small-expand-6'),
        i = els.length;
    while (i--) {
      if(els[i].classList.contains('active')){
        els[i].classList.remove('active');
      } else {
        els[i].classList.add('active');
      }
    }
  });