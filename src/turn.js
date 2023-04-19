function evaluateGuess(guess, correctAnswer) {
  const result = guess === correctAnswer ? true : false;
  return result ? "Correct!" : "Incorrect!";
}

module.exports = {
  evaluateGuess
}