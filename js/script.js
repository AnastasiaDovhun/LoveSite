// 

let logoLove = document.querySelector('.logo__love'), 
    logoYou = document.querySelector('.logo__you'),
    logoImg = document.querySelector('.logo__img');

let flowerImg = document.querySelector('.flower_block__flower');

document.addEventListener('DOMContentLoaded', function(){ 
    setInterval(function() {
        logoLove.classList.remove("logo__love--left");
        logoYou.classList.remove("logo__you--right");
        logoImg.classList.remove("logo__img--top");
        flowerImg.classList.remove('flower_block__flower--hide');
    }, 0);
      

});


var element = document.querySelector('#target'),
    flowerPetal = document.querySelectorAll('.flower_block__petal');




var Visible = function (target) {

    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top + element.offsetHeight,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    
    },
    
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
    for(let i=0;i<flowerPetal.length;i++){
        flowerPetal[i].classList.remove('flower_block__petal--hide');
    }
  } else {
    console.clear();
  };
};

window.addEventListener('scroll', function() {
  Visible (element);
});

Visible (element);


