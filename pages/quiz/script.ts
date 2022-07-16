// Selectors
const startBtn = document.querySelector('[start-btn]');
const questionary = document.querySelector('[questionary]');
const checkBtn = document.querySelector('[check-btn]');
const nextBtn = document.querySelector('[next-btn]');
const refreshBtn = document.querySelector('[refresh-btn]');
const message = document.querySelector('[message]');
const container = document.querySelector('[container]');
const quesTitle = document.querySelector('[ques-title]');
const answerA = document.querySelector('[a]');
const textA = document.querySelector('[a-txt]');
const answerB = document.querySelector('[b]');
const textB = document.querySelector('[b-txt]');
const answerC = document.querySelector('[c]');
const textC = document.querySelector('[c-txt]');
const answerD = document.querySelector('[d]');
const textD = document.querySelector('[d-txt]');

// Global Variables
const maxScore = 50;
const totalRounds = 5;
let score = 0;
let currentRound = 0;
let answerChecked = '';
let correctAnswer = '';
let queNum = 0;

// Event Listeners
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide');
    start();
});
checkBtn.addEventListener('click', check);
nextBtn.addEventListener('click', newRound);
refreshBtn.addEventListener('click', () => document.location.reload());

// Functions
function start() {
    currentRound++;
    console.log(`Current round => ${currentRound}`);
    console.log('Started');
    questionary.classList.remove('hide');
    checkBtn.classList.remove('hide');

    renderQue();
}

function check() {
    playSound('/media/notification.mp3')
    toggleRadio(true);
    if (answerA instanceof HTMLInputElement ? answerA.checked : '') {
        answerChecked = questions[queNum].answers[0];
    } else if (answerB instanceof HTMLInputElement ? answerB.checked : '') {
        answerChecked = questions[queNum].answers[1];
    } else if (answerC instanceof HTMLInputElement ? answerC.checked : '') {
        answerChecked = questions[queNum].answers[2];
    } else if (answerD instanceof HTMLInputElement ? answerD.checked : '') {
        answerChecked = questions[queNum].answers[3];
    }
    backgroundChange();
    console.log(`Answer '${answerChecked}' checked`);
    let messageHTML = '';
    if (correct()) {
        score += 10;
        messageHTML =
            '<span id="right-message"><i class="fa-solid fa-circle-check"></i> Right Answer</span>';
    } else {
        messageHTML =
            '<span id="wrong-message"><i class="fa-solid fa-circle-xmark"></i> Wrong Answer</span>';
    }
    nextBtn.classList.remove('hide');
    message.classList.remove('hide');
    checkBtn.classList.add('hide');
    message instanceof HTMLElement
        ? (message.innerHTML = `<div id="message-container">${messageHTML}<br>Score: ${score}/${maxScore}<br></div>`)
        : '';
}

function newRound() {
    queNum++;
    backgroundRemove();
    toggleRadio(false);
    let finalMessage = '';
    currentRound++;
    console.log('New question');
    console.log(`Current round => ${currentRound}`);
    nextBtn.classList.add('hide');
    message.classList.add('hide');
    deselectAnswer();
    if (currentRound <= totalRounds) {
        checkBtn.classList.remove('hide');
        renderQue();
    } else {
        console.log('Finished');
        if (score === maxScore) {
            finalMessage = 'Perfect! 😎';
            playSound('/media/crowd-yeah.mp3')
        } else if (score > maxScore / 2) {
            finalMessage = 'Almost there 😕...';
            playSound('/media/sad.mp3')
        } else {
            finalMessage = '❌ Good luck in the next time';
            playSound('/media/fail-trumpet.mp3')
        }
        const finalContainer = `<h3>Congratulations!</h3><div>Your score was ${score}/${maxScore}<br/>${finalMessage}</div>`;
        container instanceof HTMLElement
            ? (container.innerHTML = finalContainer)
            : '';
        refreshBtn.classList.remove('hide');
    }
}

function correct() {
    if (answerChecked === questions[queNum].correct) {
        console.log('Correct answer');
        return true;
    } else {
        console.log('Wrong answer');
        return false;
    }
}

function renderQue() {
    console.log(`Question Number => ${queNum}`);
    quesTitle.innerHTML = questions[queNum].question;
    textA.innerHTML = questions[queNum].answers[0];
    textB.innerHTML = questions[queNum].answers[1];
    textC.innerHTML = questions[queNum].answers[2];
    textD.innerHTML = questions[queNum].answers[3];
}

function deselectAnswer() {
    answerA instanceof HTMLInputElement ? (answerA.checked = false) : '';
    answerB instanceof HTMLInputElement ? (answerB.checked = false) : '';
    answerC instanceof HTMLInputElement ? (answerC.checked = false) : '';
    answerD instanceof HTMLInputElement ? (answerD.checked = false) : '';
}

function toggleRadio(disabled) {
    answerA instanceof HTMLInputElement ? (answerA.disabled = disabled) : '';
    answerB instanceof HTMLInputElement ? (answerB.disabled = disabled) : '';
    answerC instanceof HTMLInputElement ? (answerC.disabled = disabled) : '';
    answerD instanceof HTMLInputElement ? (answerD.disabled = disabled) : '';
}

function backgroundChange() {
    if (questions[queNum].correct === questions[queNum].answers[0]) {
        textA.classList.add('correct');
    }
    if (questions[queNum].correct === questions[queNum].answers[1]) {
        textB.classList.add('correct');
    }
    if (questions[queNum].correct === questions[queNum].answers[2]) {
        textC.classList.add('correct');
    }
    if (questions[queNum].correct === questions[queNum].answers[3]) {
        textD.classList.add('correct');
    }
}

function backgroundRemove() {
    textA.classList.remove('correct');
    textB.classList.remove('correct');
    textC.classList.remove('correct');
    textD.classList.remove('correct');
}

function playSound(url) {
    const audio = new Audio(url)
    audio.play()
}

// TODO => Usar JSON para pegar as respostas
const questions = [
    {
        question: 'Which is the height of the tallest person in the world?',
        answers: ['3m', '2.5m', '2m', '3.5m'],
        correct: '2.5m',
    },
    {
        question: 'Which is the length of the human intestines?',
        answers: ['7.5m', '2m', '10.2m', '5m'],
        correct: '7.5m',
    },
    {
        question: 'Which is the national flower of Japan',
        answers: ['Begonia', 'Sakura', 'Chrysanthemums', 'Hydrangea'],
        correct: 'Chrysanthemums',
    },
    {
        question: 'In which year did man walk on the moon?',
        answers: ['1970', '1969', '1958', '1980'],
        correct: '1969',
    },
    {
        question: 'How many countries are there in the world?',
        answers: ['208', '175', '182', '195'],
        correct: '195',
    },
];
