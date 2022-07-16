var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Notification.requestPermission().then((permission) => {
    console.log('Notification permission', permission);
});
const startBtn = document.querySelector('[start]');
const pauseBtn = document.querySelector('[pause]');
const pomodoroBtn = document.querySelector('[pomodoro]');
const shortBreakBtn = document.querySelector('[short-break]');
const longBreakBtn = document.querySelector('[long-break]');
const configBtn = document.querySelector('[config]');
const timer = document.querySelector('[timer]');
const progressBar = document.querySelector('[progress-bar]');
const quoteBox = document.querySelector('[quote-box]');
const title = document.querySelector('title');
let active = false;
let pomodoroTime = 1500;
let shortBreakTime = 300;
let longBreakTime = 1500;
let remainMinutes = 0;
let remainSeconds = 0;
let fullTime = pomodoroTime;
let remainTime = fullTime;
startBtn.addEventListener('click', () => {
    console.log('Start button clicked');
    startBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    start();
});
pauseBtn.addEventListener('click', () => {
    console.log('Pause button clicked');
    pauseBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    pause();
});
pomodoroBtn.addEventListener('click', () => {
    console.log('Pomodoro button clicked');
    pause();
    pauseBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    fullTime = pomodoroTime;
    remainTime = fullTime;
});
shortBreakBtn.addEventListener('click', () => {
    console.log('Short break button clicked');
    pause();
    pauseBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    fullTime = shortBreakTime;
    remainTime = fullTime;
});
longBreakBtn.addEventListener('click', () => {
    console.log('Long break button clicked');
    pause();
    pauseBtn.classList.add('hide');
    startBtn.classList.remove('hide');
    fullTime = longBreakTime;
    remainTime = fullTime;
});
configBtn.addEventListener('click', () => {
    pomodoroTime = parseInt(prompt('Pomodoro duration (in minutes)')) * 60;
    shortBreakTime = parseInt(prompt('Short break duration (in minutes)')) * 60;
    longBreakTime = parseInt(prompt('Long break duration (in minutes)')) * 60;
    fullTime = pomodoroTime;
    remainTime = fullTime;
    updateTimer();
});
function notification(title, body, icon = '/media/timer.png') {
    new Notification(title, {
        body: body,
        icon: icon,
    });
    playSound('/media/notification.mp3');
}
function start() {
    active = true;
}
function pause() {
    active = false;
}
function updateTimer() {
    if (remainTime > 0) {
        if (active) {
            remainTime--;
        }
        remainMinutes = Math.floor(remainTime / 60);
        remainSeconds = remainTime % 60;
        if (remainMinutes < 10) {
            var remainMinutesTxt = `0${remainMinutes}`;
        }
        else {
            var remainMinutesTxt = `${remainMinutes}`;
        }
        if (remainSeconds < 10) {
            var remainSecondsTxt = `0${remainSeconds}`;
        }
        else {
            var remainSecondsTxt = `${remainSeconds}`;
        }
        timer.innerHTML = `${remainMinutesTxt}:${remainSecondsTxt}`;
        title.textContent = `${timer.innerHTML} Pomodoro`;
        updateBar();
    }
    else if (remainTime === 0) {
        pause();
        pauseBtn.classList.add('hide');
        startBtn.classList.remove('hide');
        if (fullTime === pomodoroTime) {
            notification('Pomodoro Timer', 'Pomodoro finished');
            fullTime = shortBreakTime;
            remainTime = fullTime;
        }
        else if (fullTime === shortBreakTime) {
            notification('Pomodoro Timer', 'Short break finished');
            fullTime = pomodoroTime;
            remainTime = fullTime;
        }
    }
}
function updateBar() {
    const remainTimePercentage = (remainTime / fullTime) * 100;
    progressBar instanceof HTMLElement
        ? (progressBar.style.width = `${remainTimePercentage}%`)
        : '';
}
function changeQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');
        const data = yield response.json();
        quoteBox.innerHTML = `"${yield data.quotes[0].text}"<br>${yield data
            .quotes[0].author}`;
    });
}
changeQuote();
function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}
setInterval(updateTimer, 1000);
setInterval(changeQuote, 20000);
