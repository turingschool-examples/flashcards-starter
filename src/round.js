const { evaluateGuess } = require('../src/turn');

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []  
  }
  return round;
}

function takeTurn(guess, round) {
  const correctAnswer = round.currentCard.correctAnswer;
  const comment = evaluateGuess(guess, correctAnswer);
  if (guess !== correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.turns ++;
  round.currentCard = round.deck[round.turns];
  return comment;
}

function calculatePercentCorrect(round) {
  const percentIncorrect = (round.incorrectGuesses.length / round.turns) * 100;
  return 100 - Number(percentIncorrect.toFixed(2));
}

function endRound(round) {
  const percentCorrect = calculatePercentCorrect(round);
  const endRoundMessage = `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  console.log(endRoundMessage);
  return endRoundMessage;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}
