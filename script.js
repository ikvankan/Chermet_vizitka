window.onload = function() {window.scroll(0,0)}
window.onload = setTimeout(x,2700);
var images = [
  "images\\men_1.jpg",
  "images\\men_2.jpg",
  "images\\men_3.jpg",
  "images\\men_4.jpg"
];
function loadImg(i){
  if(images[i] != undefined){
      var img = new Image();
      img.src = images[i];
      img.onload = function(){ // detect if image has been loaded
          i++;
          loadImg(i);
      }
  }
  if(images.length == i) // adding class 'loaded' when all images finished with loading
      document.getElementsByClassName("img_block")[0].classList.add("loaded");
}
loadImg(0);
function x() {
  window.scroll(0,0);
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      
    }, 500);
  }
  window.onload = function (){
setTimeout(() => {
  document.getElementById("block1").classList.add('animate_block');
  document.getElementById("img_block1").classList.add('ht');
}, 3100);
setTimeout(() => {
  document.getElementById("block2").classList.add('animate_block')
  document.getElementById("img_block2").classList.add('ht');
  document.getElementById("line1").classList.add("animate_line");
  document.getElementById("line2").classList.add("animate_line");
}, 3200);
setTimeout(() => {
  document.getElementById("block3").classList.add('animate_block')
  document.getElementById("img_block3").classList.add('ht');
}, 3300);
  }


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
      
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        document.querySelector('.square-wrapper').classList.add('wrapper-moveL');
      return; // если класс добавлен, продолжать уже не надо
      }
      // перемещение завершено, теперь надо удалить класс
      square.classList.remove('square-animation');
      document.querySelector('.square-wrapper').classList.remove('wrapper-moveL');
    });
  });
  observer.observe(document.querySelector('.square-wrapper'));