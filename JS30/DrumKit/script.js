function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    }

    function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

// document.addEventListener("keydown", (event) => {
     
//     var key = document.getElementById("32");
//     //for mouse clicks
//     if(key == 32){
//         var audio = new Audio("boom.wav");
//         audio.currentTime = 0;
//         audio.play();
//     }
// });