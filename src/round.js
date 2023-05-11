const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turn: 0,
  incorrectGuesses: []
});

module.exports = {
  createRound
}