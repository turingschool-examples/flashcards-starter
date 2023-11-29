function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []  
  }
  return round;
}

function takeTurn() {

}

function calculatePercentCorrect() {

}

function endRound() {

}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}
