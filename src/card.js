// function createCard(id, question, answers, correctAnswer) {
//   const card = {
//     id,
//     question,
//     answers,
//     correctAnswer
//   }
//   return card;
// }
 
const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'Correct!';
  } else {
    return 'Incorrect';
  }
}

module.exports = { 
  createCard,
  evaluateGuess
};