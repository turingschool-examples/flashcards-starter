const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
})

const takeTurn = (guess, round) => {
  message = ''
  if (guess === round.currentCard.correctAnswer) {
    message = 'correct!'
  }
  if (guess !== round.currentCard.correctAnswer) {
    message = 'incorrect!'
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns++
  round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1]
  return message
} 


const calculatePercentageCorrect = (round) => (round.incorrectGuesses.length / round.turns) * 100

const endRound = (round) => `**Round over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`
 
module.exports = {createRound, takeTurn, calculatePercentageCorrect, endRound}