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
      document.getElementsByClassName("slider")[0].classList.add("loaded");
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
}, 3200);
setTimeout(() => {
  document.getElementById("block3").classList.add('animate_block')
}, 3300);
  }