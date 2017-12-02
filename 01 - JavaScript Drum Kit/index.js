function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // resets timer so sounds can be played consecutively
  audio.play();
  key.classList.add('playing');
}

function removeStyling(e) {
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const allKeys = document.querySelectorAll('div.key');

allKeys.forEach(function(key, index) {
  key.addEventListener('transitionend', removeStyling);
})
