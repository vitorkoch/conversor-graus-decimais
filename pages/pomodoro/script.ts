// FIXME => When lost focus stop working
// TODO => Use device time for timer
// BUG => Quote api doesn't working

changeQuote();
Notification.requestPermission().then((permission) => {
    console.log('Notification permission', permission);
});

// Selectors
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
const configMenuBg = document.querySelector('[config-menu-bg]');
const closeBtn = document.querySelector('[close-btn]');
const confirmBtn = document.querySelector('[confirm-btn]');
const pomodoroInput = document.querySelector('[pomodoro-input]');
const shortBreakInput = document.querySelector('[short-break-input]');
const longBreakInput = document.querySelector('[long-break-input]');

// Global Variables
let active = false;
let pomodoroTime = 25 * 60;
let shortBreakTime = 5 * 60;
let longBreakTime = 30 * 60;
let remainMinutes = 0;
let remainSeconds = 0;
let fullTime = pomodoroTime;
let remainTime = fullTime;
let initialTime = 0;
let currentTime = 0;
let previousTime = remainTime;
let passedPausedTime = 0;
let initialPausedTime = getTime();

// Event Listeners
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
    configMenuBg instanceof HTMLElement
        ? (configMenuBg.style.display = 'block')
        : '';
    fullTime = pomodoroTime;
    remainTime = fullTime;
    updateTimer();
});
closeBtn.addEventListener('click', closeConfigMenu);
confirmBtn.addEventListener('click', () => {
    if (
        (pomodoroInput instanceof HTMLInputElement
            ? Number(pomodoroInput.value)
            : '') > 0
    ) {
        pomodoroTime =
            pomodoroInput instanceof HTMLInputElement
                ? Number(pomodoroInput.value) * 60
                : Number('');
    }
    if (
        (shortBreakInput instanceof HTMLInputElement
            ? Number(shortBreakInput.value)
            : '') > 0
    ) {
        shortBreakTime =
            shortBreakInput instanceof HTMLInputElement
                ? Number(shortBreakInput.value) * 60
                : Number('');
    }
    if (
        (longBreakInput instanceof HTMLInputElement
            ? Number(longBreakInput.value)
            : '') > 0
    ) {
        longBreakTime =
            longBreakInput instanceof HTMLInputElement
                ? Number(longBreakInput.value) * 60
                : Number('');
    }

    closeConfigMenu();
});
configMenuBg.addEventListener('click', (event) => {
    const target =
        event.target instanceof HTMLElement
            ? event.target.getAttribute('id')
            : '';
    if (target === 'config-menu-bg') {
        closeConfigMenu();
    }
});

// Functions
function notification(title, body, icon = '../../media/timer.png') {
    new Notification(title, {
        body: body,
        icon: icon,
    });
    playSound('../../media/notification.mp3');
}

function getTime() {
    return new Date().getTime() / 1000;
}

function start() {
    active = true;
    initialTime = initialTime + passedPausedTime;
    if (remainTime === fullTime) {
        initialTime = getTime();
    }
}

function pause() {
    active = false;
    initialPausedTime = getTime();
}

function updateTimer() {
    if (remainTime > 0) {
        const passedTime = Math.floor(getTime() - initialTime);
        if (active) {
            console.log('Passed Time:', passedTime);
            if (remainTime !== remainTime - passedTime) {
                remainTime = fullTime - passedTime;
            }
        } else if (!active) {
            passedPausedTime = Math.floor(getTime() - initialPausedTime);
            if(passedPausedTime < 0){
                passedPausedTime = passedPausedTime + (passedPausedTime * -1)
            }
            console.log('Paused time', passedPausedTime)
        }
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
            var remainSecondsTxt = `${remainSeconds}`;
        }

        timer.innerHTML = `${remainMinutesTxt}:${remainSecondsTxt}`;
        title.textContent = `${timer.innerHTML} Pomodoro`;
        updateBar();
    } else if (remainTime === 0) {
        pause();
        pauseBtn.classList.add('hide');
        startBtn.classList.remove('hide');
        if (fullTime === pomodoroTime) {
            notification('Pomodoro Timer', 'Pomodoro finished');
            fullTime = shortBreakTime;
            remainTime = fullTime;
        } else if (fullTime === shortBreakTime) {
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

function closeConfigMenu() {
    configMenuBg instanceof HTMLElement
        ? (configMenuBg.style.display = 'none')
        : '';
    pomodoroInput instanceof HTMLInputElement ? (pomodoroInput.value = '') : '';
    shortBreakInput instanceof HTMLInputElement
        ? (shortBreakInput.value = '')
        : '';
    longBreakInput instanceof HTMLInputElement
        ? (longBreakInput.value = '')
        : '';
    fullTime = pomodoroTime;
    remainTime = fullTime;
}

async function changeQuote() {
    const response = await fetch(
        'https://goquotes-api.herokuapp.com/api/v1/random?count=1'
    );
    const data = await response.json();
    quoteBox.innerHTML = `"${await data.quotes[0].text}"<br>${await data
        .quotes[0].author}`;
}

function playSound(url, volume = 1) {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play();
}

setInterval(updateTimer, 100);
setInterval(changeQuote, 20000);
