function evaluateGuess(guess, card) {
  if (guess === card.correctAnswer) {
    return 'Correct!';
  } else {
    return 'Incorrect!';
  }
}

module.exports = { 
  evaluateGuess
};