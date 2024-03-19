function evaluateGuess(guess, correctAnswer) {
  const response = guess === correctAnswer ? "correct!" : "incorrect!";
  return response;
}

module.exports = { evaluateGuess };
