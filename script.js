window.onload = setTimeout(x,2700);
window.onload = function() {window.scroll(0,0);};
function x() {
  window.scroll(0,0);
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      
    }, 500);
  }
  