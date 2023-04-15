function evaluateGuess(guess, correctAnswer) {
  return guess === correctAnswer ? true : false;
}

function giveFeedback(result) {
  return result ? "Correct!" : "Incorrect!";
}

module.exports = {
  evaluateGuess,
  giveFeedback
}