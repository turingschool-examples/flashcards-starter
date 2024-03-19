const { evaluateGuess } = require("./turn");

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
}

function takeTurn(guess, round) {
  const evaluation = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (evaluation === "incorrect!")
    round.incorrectGuesses.push(round.currentCard.id);
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  return evaluation;
}

function calculatePercentCorrect(round) {
  const percentage =
    (round.turns - round.incorrectGuesses.length) / round.turns;
  return Math.floor(percentage * 100);
}

function endRound(round) {
  const percentage = calculatePercentCorrect(round);
  const message = `** Round over! ** You answered ${percentage}% of the questions correctly!`;
  console.log(message);
  return message;
}

function resetRound(round) {
  console.log("Reseting round");
  round.turns = 0;
  round.currentCard = round.deck[round.turns];
  round.incorrectGuesses = [];
  return round;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
  resetRound,
};
