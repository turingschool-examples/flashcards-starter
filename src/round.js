const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
});

const takeTurn = (guess, round) => {
  round.turns ++
}
module.exports = {
  createRound,
  takeTurn
}