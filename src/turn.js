function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return `correct!`
  }
  return `incorrect!`
};

module.exports = {
  evaluateGuess
};