const keys  =  document.querySelectorAll('.key');
const note  =  document.querySelector('.nowplaying');
const hints =  document.querySelectorAll('.hints');
window.addEventListener('keydown',function(e){
      const key =this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
      const audio =this.document.querySelector(`audio[data-key="${e.keyCode}"]`)

      if(!key) return;
      
      const keynote = key.getAttribute('data-note');

      note.innerHTML =keynote;
      key.classList.add('playing');
      audio.play();
      audio.currentTime =0
    });

    function removetrasition(){
      this.classList.remove('playing');
    }
    keys.forEach(key => key.addEventListener('transitionend' , removetrasition))

     hints.forEach(function(elm , index) {
       elm.style = `transition-delay : ${index * 50}ms`
     })