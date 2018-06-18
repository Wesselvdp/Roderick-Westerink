// Parallax
import rellax from 'rellax'


function removeScroller(e) {
   const scroller =  document.querySelector('.scrolldown');
   scroller.classList.toggle('away');
}
window.addEventListener('scroll', removeScrolller)