const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
})

const takeTurn = (guess, round) => {}

const calculatePercentageCorrect = (round) => {}

const endRound = (round) => {}
 
module.exports = {createRound, takeTurn, calculatePercentageCorrect}