const pics = [
  'https://images.pexels.com/photos/3889990/pexels-photo-3889990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

const slider = document.querySelector('.slider img');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
let counter = 1;

nextBtn.addEventListener('click', () => {
  if(counter === pics.length) {
    counter = 0;
  }
  slider.src = pics[counter];
  counter++;
});

prevBtn.addEventListener('click', () => {
  if(counter >= pics.length) {
    counter = 0;
  }
  slider.src = pics[counter];
  counter++;  
});
 

