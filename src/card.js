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

function createDeck(cards) {
  return [...cards];
}


module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
};
