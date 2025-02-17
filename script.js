let timer;
let timeLeft = 300;
const audio = document.getElementById('meditationSound');
const timerDisplay = document.getElementById('timer');
const flower = document.getElementById('chakraFlower'); 

document.getElementById('startButton').addEventListener('click', startMeditation);
document.getElementById('stopButton').addEventListener('click', stopMeditation);
document.getElementById('menuToggle').addEventListener('click', toggleMenu);

function startMeditation() {
  if (!timer) {
    audio.play();
    flower.style.display = 'block';
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        stopMeditation();
      }
    }, 1000);
  }
}

function stopMeditation() {
  clearInterval(timer);
  timer = null;
  audio.pause();
  audio.currentTime = 0;
  timeLeft = 300;
  updateDisplay();
  flower.style.display = 'none';
}

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
