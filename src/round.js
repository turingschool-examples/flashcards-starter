const { evaluateGuess } = require('../src/card');

function createRound(decks) {
  let rounds = {
    deck: decks,
    currentCard: decks[0],
    turns: 0,
    incorrectGuess: [],
  }
  return rounds;
}

function takeTurn(guess, round) {
  let correctAnswer = round.currentCard.answer;
  let result = evaluateGuess(guess, correctAnswer);
  if (result === 'Incorrect!') {
    round.incorrectGuess.push(round.currentCard.id);
  }
  round.turns++
  round.currentCard = round.deck[round.turns];
  return result;
}

function calculatePercentCorrect(round) {
  let percent = ((round.turns - round.incorrectGuess.length)/round.turns) * 100

  return percent;
}

function endRound(round) {
  let percent = calculatePercentCorrect(round);
  return `** Round over! ** You answered ${percent}% of the questions correctly!`
}

module.exports = {createRound, takeTurn, calculatePercentCorrect, endRound}


 