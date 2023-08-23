const { evaluateGuess } = require("../src/card");

function takeTurn(guess, round) {
  round.turns += 1;
  let turn = round.turns;
  let feedback = evaluateGuess(guess, round.currentCard);
  if (feedback === `incorrect!`) {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCard = round.deck[turn];
  return feedback;
}

function createRound(deck) {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
  return round;
}

function calculatePercentCorrect(round) {
  let percentageCorrect = Math.floor(
    ((round.turns - round.incorrectGuesses.length) / round.turns) * 100
  );
  return percentageCorrect;
}

function endRound(round) {
  return console.log(
    `** Round over! ** You answered ${calculatePercentCorrect(
      round
    )}% of the questions correctly!`
  );
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
