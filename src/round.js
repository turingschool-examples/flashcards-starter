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
                                
function takeTurn(guess, rounds) {
  let result = evaluateGuess(guess, rounds.currentCard.correctAnswer);
  if (result === 'Incorrect!') {
    rounds.incorrectGuess.push(rounds.currentCard.id);
  } else {
    result;
  }
  rounds.turns++
  rounds.currentCard = rounds.deck[rounds.turns];
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


 