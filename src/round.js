const createRound = (deck) => {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round
}

const takeTurn = (guess, round) => {
  round.turns += 1
}

module.exports = {
  createRound,
  takeTurn
}