function evaluateGuess(guess, card) {
  if (guess !== card.correctAnswer) {
    return 'incorrect!';
  } else {
    return 'correct!';
  }
}

module.exports = {evaluateGuess};