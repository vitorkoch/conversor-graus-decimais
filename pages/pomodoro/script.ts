// Selectors
const startBtn = document.querySelector('[start]');
const pauseBtn = document.querySelector('[pause]');
const restartBtn = document.querySelector('[restart]');
const pomodoroBtn = document.querySelector('[pomodoro]');
const shortBreakBtn = document.querySelector('[short-break]');
const longBreakBtn = document.querySelector('[long-break]');
const timer = document.querySelector('[timer]');
const progressBar = document.querySelector('[progress-bar]');

// Global Variables
let active = false;
let mode = 'pomodoro';
let pomodoroTime = 1500 + 1; // 25min
let shortBreakTime = 300 + 1; // 5min
let longBreakTime = 1500 + 1; // 25min
let remainMinutes = 0;
let remainSeconds = 0;

if (mode === 'pomodoro') {
    var fullTime = pomodoroTime;
} else if (mode == 'shortBreak') {
    var fullTime = shortBreakTime;
} else if (mode === 'longBreak') {
    var fullTime = longBreakTime;
}

let remainTime = fullTime;

// Event Listeners
startBtn.addEventListener('click', () => {
    console.log('Start button clicked');
    startBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    restartBtn.classList.add('hide');
    start();
});
pauseBtn.addEventListener('click', () => {
    console.log('Pause button clicked');
    pauseBtn.classList.add('hide');
    restartBtn.classList.remove('hide');
    startBtn.classList.remove('hide');
    pause();
});
restartBtn.addEventListener('click', () => {
    console.log('Restart button clicked');
    restartBtn.classList.add('hide');
    startBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    restart();
});
pomodoroBtn.addEventListener('click', () => {
    console.log('Pomodoro button clicked');
});
shortBreakBtn.addEventListener('click', () => {
    console.log('Short break button clicked');
    shortBreakBtn instanceof HTMLInputElement
        ? (shortBreakBtn.disabled = true)
        : '';
});
longBreakBtn.addEventListener('click', () => {
    console.log('Long break button clicked');
});

// Functions
function start() {
    active = true;
}

function pause() {
    active = false;
}

function restart() {
    if (mode === 'pomodoro') {
        remainTime = pomodoroTime;
    } else if (mode == 'shortBreak') {
        remainTime = shortBreakTime;
    } else if (mode === 'longBreak') {
        remainTime = longBreakTime;
    }
    start();
}

function updateTimer() {
    if (remainTime > 0) {
        if (active) {
            remainTime--;
            remainMinutes = Math.floor(remainTime / 60);
            remainSeconds = remainTime % 60;
            if (remainMinutes < 10) {
                var remainMinutesTxt = `0${remainMinutes}`;
            } else {
                var remainMinutesTxt = `${remainMinutes}`;
            }
            if (remainSeconds < 10) {
                var remainSecondsTxt = `0${remainSeconds}`;
            } else {
                var remainSecondsTxt = `${remainSeconds}`
            }
            timer.innerHTML = `${remainMinutesTxt}:${remainSecondsTxt}`;
            updateBar();
        }
    }
}

function updateBar() {
    const remainTimePercentage = (remainTime / fullTime) * 100;
    progressBar instanceof HTMLElement
        ? (progressBar.style.width = `${remainTimePercentage}%`)
        : '';
}

setInterval(updateTimer, 10);
