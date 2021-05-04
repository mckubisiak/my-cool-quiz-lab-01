import { checkForYes } from './utils.js';
import { checkForNo } from './utils.js';

const kirbyButton = document.getElementById('kirby-button');
const quizResults = document.getElementById('results');

kirbyButton.addEventListener('click', () => {
    alert('Welcome to Dream Land, prepare for a kirby quiz!');
    const takeQuiz = confirm('Do you want to take the quiz?');
    if (takeQuiz === false) {
        return;
    }

    const firstName = prompt('Enter your first name?');

    const lastName = prompt('Enter your last name?');

    const firstAnswer = prompt('Does Kirby live on Earth?');

    let score = 0;

    if (checkForNo(firstAnswer)) {
        score = score + 1;
    }

    const secondAnswer = prompt('Can Kirby turn into a rocket?');

    if (checkForYes(secondAnswer)) {
        score = score + 1;
    }

    const thirdAnswer = prompt('Is Meta Knight one of  Kirbys rivals?');

    if (checkForYes(thirdAnswer)) {
        score = score + 1;
    }

    quizResults.textContent = `Congratulations ${firstName} ${lastName}! You got ${score} out of 3!`;
});