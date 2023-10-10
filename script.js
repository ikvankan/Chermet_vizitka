var images = [
  "images\\logo.jpg",
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
window.onload = setTimeout(x,2700);

function x() {
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
setTimeout(()=>{
  //jpg animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
      
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        document.querySelector('.square-wrapper').classList.add('wrapper-moveL');
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  observer.observe(document.querySelector('.square-wrapper'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square2 = entry.target.querySelector('.square2');
      
      if (entry.isIntersecting) {
        square2.classList.add('square-animation2');
        document.querySelector('.square-wrapper2').classList.add('wrapper-moveR');
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  observer2.observe(document.querySelector('.square-wrapper2'));
//history animation
const historyobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    
    if (entry.isIntersecting) {

      document.getElementById('carousel2').classList.add('aimatehistory');
      
    return; // если класс добавлен, продолжать уже не надо
    }
    
  });
});
historyobserver.observe(document.getElementById('carousel2'));
//line animations




  const lineobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver.observe(document.querySelector('.line'));


  const lineobserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line2').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver2.observe(document.querySelector('.line2'));


  const lineobserver3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line3').classList.add('animate_line2');
        
      return;
      }
      
    });
  });
  lineobserver3.observe(document.querySelector('.line3'));



  const lineobserver4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line4').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver4.observe(document.querySelector('.line4'));

  const lineobserver5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line5').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver5.observe(document.querySelector('.line5'));

  const lineobserver6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line6').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver6.observe(document.querySelector('.line6'));

  const lineobserver7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line7').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver7.observe(document.querySelector('.line7'));

  const lineobserver8 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      
      
      if (entry.isIntersecting) {
        document.querySelector('.line8').classList.add('animate_line2');
        
      return; // если класс добавлен, продолжать уже не надо
      }
      
    });
  });
  lineobserver8.observe(document.querySelector('.line8'));

},3500);
  }


//scroll
  $(document).ready(function(){
        $('.dropdown a').click(function(){
            /*задали какой мы хотим отступ от верха страницы*/
            const vw = window.innerWidth / 100;
            $('body,html').animate({
            /*получили положение элемента вычли отступ и прокрутили*/
              scrollTop: $($(this).attr('href')).offset().top-5*vw
            });
        });
    });