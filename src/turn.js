module.exports = {
  evaluateGuess
}

function evaluateGuess(userGuess, card) {
  if (userGuess === card.correctAnswer) {
    return 'correct!'
  }
  return 'incorrect!'
};