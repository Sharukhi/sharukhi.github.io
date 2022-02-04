const texts = document.querySelectorAll('.js-text');
let currentPos = window.pageYOffset;
let translateAmount = -3.5;

const looper = function() {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * translateAmount;
  
  for (let i = 0; i < texts.length; ++i){
    texts[i].style.transform = `translateY(${speed * i}%)`;
  }
  currentPos = newPos;
  
  requestAnimationFrame(looper);
}

looper();