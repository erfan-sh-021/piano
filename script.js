const note =document.querySelector('.nowplaying')
const keys =document.querySelectorAll('.key')
const hints =document.querySelectorAll('.hints')
window.addEventListener('a' , function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(! key) return;

    const keyNote = key.getAttribute('data-note');
 
   note.innerHTML=keyNote;
   key.classList.add('playing');
   audio.currentTime =0;
    audio.play();
});
function removetransition(){
    this.classList.remove('playing')
}
keys.forEach(key => key.addEventListener('transitionend',removetransition))
hints.forEach(function (elm ,index) {
    elm.setAttribute('style' ,`transition-delay : ${index *70}ms`)
  })