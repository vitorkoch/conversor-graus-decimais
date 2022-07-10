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
let maxScore = 0;
let score = 0;
let totalRounds = 0;
let currentRound = 0;
let answerChecked = '';
let correctAnswer = '';
let usedQues = [];
let random = 0;
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
    deselectAnswer();
    if (currentRound <= totalRounds) {
        checkBtn.classList.remove('hide');
        renderQue();
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
            finalMessage = '❌ Good luck in the next time';
        }
        const finalContainer = `<h3>Congratulations!</h3><div>Your score was ${score}/${maxScore}<br/>${finalMessage}</div>`;
        container instanceof HTMLElement
            ? (container.innerHTML = finalContainer)
            : '';
        refreshBtn.classList.remove('hide');
    }
}
function correct() {
    if (answerChecked === questions[random].correct) {
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
function renderQue() {
    const randomNum = generateRandomInteger();
    console.log(`Question Number => ${randomNum}`);
    console.log(`Used questions => ${usedQues}`);
    quesTitle.innerHTML = questions[randomNum].question;
    textA.innerHTML = questions[randomNum].answers[0];
    textB.innerHTML = questions[randomNum].answers[1];
    textC.innerHTML = questions[randomNum].answers[2];
    textD.innerHTML = questions[randomNum].answers[3];
}
function deselectAnswer() {
    answerA instanceof HTMLInputElement ? (answerA.checked = false) : '';
    answerB instanceof HTMLInputElement ? (answerB.checked = false) : '';
    answerC instanceof HTMLInputElement ? (answerC.checked = false) : '';
    answerD instanceof HTMLInputElement ? (answerD.checked = false) : '';
}
function generateRandomInteger() {
    random = Math.floor(Math.random() * totalRounds - 1) + 1;
    if (random in usedQues) {
        console.log(`The random number was ${random} but already was used`);
        generateRandomInteger();
    }
    usedQues.push(random);
    return random;
}
const questions = [
    {
        question: 'Which is the height of the tallest person in the world?',
        answers: ['3m', '2.5m', '2m', '3.5m'],
        correct: 'b',
    },
    {
        question: 'Which is the length of the human intestines?',
        answers: ['7.5m', '2m', '10.2m', '5m'],
        correct: 'a',
    },
    {
        question: 'Which is the national flower of Japan',
        answers: ['Begonia', 'Sakura', 'Chrysanthemums', 'Hydrangea'],
        correct: 'c',
    },
    {
        question: 'In which year did man walk on the moon?',
        answers: ['1970', '1969', '1958', '1980'],
        correct: 'b',
    },
    {
        question: 'How many countries are there in the world?',
        answers: ['208', '175', '182', '195'],
        correct: 'd',
    },
];
