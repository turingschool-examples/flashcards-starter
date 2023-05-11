const { evaluateGuess, calculatePercentage } = require("../src/card")

const takeTurn = (guess, round) => {
  let evaluate = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (evaluate === 'incorrect!' ){
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns += 1
  round.currentCard = round.deck[round.turns]
  round.over = true,
  round.percentageRight = calculatePercentage(round)

  return evaluate
}

const endRound = round => {
  if (round.over === true){
    round.over = false
    console.log(`** Round over! ** You answered ${round.percentageRight}% of the questions correctly!`)
    return `** Round over! ** You answered ${round.percentageRight}% of the questions correctly!`
  }
}

module.exports = {
  takeTurn,
  endRound,
}