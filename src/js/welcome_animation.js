import {TweenMax} from 'gsap'

window.addEventListener('load', () => {
  const con = document.querySelector('.welcome-con');
  const letters = Array.from(document.querySelectorAll('.welcome-con li'));
  letters.map((el, n) => {
    TweenMax.to(el, 0.2, {opacity: 1}).delay(n*0.1)
    TweenMax.to(el, 1, {y: '-10vh', opacity: 0}).delay(2.5)
  })
  TweenMax.to(con, 0.5, {opacity: 0, onComplete: () => {
    con.style.display = 'none'
  }}).delay(2.5);
})
