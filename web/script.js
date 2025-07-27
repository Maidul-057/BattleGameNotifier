function sendNotification() {
  const player = document.getElementById('player').value.trim();
  const action = document.getElementById('action').value.trim();
  const damage = document.getElementById('damage').value.trim();
  const type = document.getElementById('notifyType').value;

  if (!player || !action || !damage) {
    alert('Please fill out all fields!');
    return;
  }

  const damageNum = Number(damage);
  if (isNaN(damageNum) || damageNum < 0) {
    alert('Please enter a valid damage number!');
    return;
  }

  notify(player, action, damageNum, type);
}

function notify(player, action, damage, type) {
  const message = `${player} used ${action} and dealt ${damage} damage.`;

  if (type === 'console') {
    console.log(message);
    addToLog('Console: ' + message);
    playSound('console');
  } else if (type === 'sound') {
    addToLog('Sound: ' + message);
    playSound('sound');
  } else if (type === 'vibration') {
    addToLog('Vibration: ' + message);
    triggerVibration();
    playSound('vibration');
  }
}

function addToLog(text) {
  const log = document.getElementById('log');
  const entry = document.createElement('div');
  entry.textContent = text;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

function playSound(type) {
  let soundUrl;
  switch (type) {
    case 'console':
      soundUrl = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
      break;
    case 'sound':
      soundUrl = 'https://actions.google.com/sounds/v1/cartoon/slide_whistle_to_drum_hit.ogg';
      break;
    case 'vibration':
      soundUrl = 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg';
      break;
    default:
      soundUrl = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
  }

  const audio = new Audio(soundUrl);
  audio.play().catch(() => {
  });
}

function triggerVibration() {
  if (navigator.vibrate) {
    navigator.vibrate(300);
  } else {
    alert('Vibration not supported on this device.');
  }
}
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});