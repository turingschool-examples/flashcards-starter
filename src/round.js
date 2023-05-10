const {evaluateGuess} = require('./card')

function takeTurn(answer, round) {
  const correctAnswer = round.currentCard.correctAnswer
  const result = evaluateGuess(answer, correctAnswer)
  if (result === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns ++
  round.currentCard = round.deck[round.turns]
  return result
}

function calculatePercentCorrect(round) {
  const percent = Math.round((1 - (round.incorrectGuesses.length / round.turns)) * 100)
  return `${percent}%`
}

function endRound(round) {
  const percent = calculatePercentCorrect(round)
  console.log(`** Round over! ** You answered ${percent} of the questions correctly!`)
}

module.exports = {
  takeTurn,
  calculatePercentCorrect,
  endRound,
};