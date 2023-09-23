const questionText = 'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';
const rightAnswer = 'Bell';
const question = document.querySelector('.question');
question.textContent = questionText;
const answerText = prompt(questionText);
const answer = document.querySelector('.answer');
answer.textContent = answerText;
if (answerText.toLowerCase().trim() === rightAnswer.toLowerCase()) {
    answer.classList.add('answer--correct');
} else {
    answer.classList.add('answer--wrong');
}
