window.onload = setTimeout(x,2700);
function x() {
    document.body.classList.add('loaded_hiding');
    window.scrollTo(0, 0);
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  