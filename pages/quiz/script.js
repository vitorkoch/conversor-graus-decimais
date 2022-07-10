const startBtn = document.querySelector('[start-btn]');
const questionary = document.querySelector('[questionary]');
const checkBtn = document.querySelector('[check-btn]');
const nextBtn = document.querySelector('[next-btn]');
const refreshBtn = document.querySelector('[refresh-btn]');
const message = document.querySelector('[message]');
const container = document.querySelector('[container]');
const answerA = document.querySelector('[a]');
const answerB = document.querySelector('[b]');
const answerC = document.querySelector('[c]');
const answerD = document.querySelector('[d]');
let maxScore = 0;
let score = 0;
let totalRounds = 0;
let currentRound = 0;
let answerChecked = '';
let correctAnswer = '';
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide');
    checkQuestions();
    start();
});
checkBtn.addEventListener('click', check);
nextBtn.addEventListener('click', newRound);
refreshBtn.addEventListener('click', () => {
    document.location.reload();
});
function start() {
    currentRound++;
    console.log(`Current round => ${currentRound}`);
    console.log('Started');
    questionary.classList.remove('hide');
    checkBtn.classList.remove('hide');
    renderQue();
}
function check() {
    if (answerA instanceof HTMLInputElement ? answerA.checked : '') {
        answerChecked = 'a';
    }
    if (answerB instanceof HTMLInputElement ? answerB.checked : '') {
        answerChecked = 'b';
    }
    if (answerC instanceof HTMLInputElement ? answerC.checked : '') {
        answerChecked = 'c';
    }
    if (answerD instanceof HTMLInputElement ? answerD.checked : '') {
        answerChecked = 'd';
    }
    console.log(`Answer '${answerChecked}' checked`);
    let messageHTML = '';
    if (correct()) {
        score += 10;
        messageHTML =
            '<span id="right-message"><i class="fa-solid fa-circle-check"></i> Right Answer</span>';
    }
    else {
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
    let finalMessage = '';
    currentRound++;
    console.log('New question');
    console.log(`Current round => ${currentRound}`);
    nextBtn.classList.add('hide');
    message.classList.add('hide');
    if (currentRound <= totalRounds) {
        checkBtn.classList.remove('hide');
    }
    else {
        console.log('Finished');
        if (score === maxScore) {
            finalMessage = 'Perfect! 😎';
        }
        else if (score > maxScore / 2) {
            finalMessage = 'Almost there 😕...';
        }
        else {
            finalMessage = 'Good luck in the next time ❌';
        }
        const finalContainer = `<h3>Congratulations!</h3><div>Your score was ${score}/${maxScore}<br/>${finalMessage}</div>`;
        container instanceof HTMLElement
            ? (container.innerHTML = finalContainer)
            : '';
        refreshBtn.classList.remove('hide');
    }
}
function correct() {
    correctAnswer = '';
    if (correctAnswer === '') {
        console.log('Correct answer');
        return true;
    }
    else {
        console.log('Wrong answer');
        return false;
    }
}
function checkQuestions() {
    console.log('Questions checked');
    totalRounds = questions.length;
    maxScore = totalRounds * 10;
}
function checkScore() { }
function renderQue() { }
const questions = [
    {
        question: 'Which is the height of the tallest person?',
        answers: [
            { text: '3m', correct: false },
            { text: '2.5m', correct: true },
            { text: '2m', correct: false },
            { text: '3.5m', correct: false },
        ],
    },
    {
        question: 'Which is the length of the human intestines?',
        answers: [
            { text: '7.5m', correct: true },
            { text: '2m', correct: false },
            { text: '10.2m', correct: false },
            { text: '5m', correct: false },
        ],
    },
    {
        question: 'Which is the national flower of Japan',
        answers: [
            { text: 'Begonia', correct: false },
            { text: 'Sakura', correct: false },
            { text: 'Chrysanthemums', correct: true },
            { text: 'Hydrangea', correct: false },
        ],
    },
    {
        question: 'In which year did man walk on the moon?',
        answers: [
            { text: '1970', correct: false },
            { text: '1969', correct: true },
            { text: '1958', correct: false },
            { text: '1980', correct: false },
        ],
    },
    {
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: true },
        ],
    },
];
