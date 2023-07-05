function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer,
  };
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'Correct!';
  }
  return 'Incorrect!';
}

module.exports = {
  createCard,
  evaluateGuess,
};
