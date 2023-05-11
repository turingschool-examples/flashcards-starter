const {evaluateGuess, calculatePercentCorrect} = require('./src/card');

const takeTurn = (guess, round) => {
  let evaluate = evaluateGuess(guess, round.currentCard.correctAnswer);
    if(evaluate === 'Incorrect!'){
      round.incorrectGuesses.push(round.currentCard.id)
   }
    round.roundOver = true
    round.turns += 1
    round.percentage = calculatePercentCorrect(round)
    round.currentCard = round.deck[round.turns]
  return evaluate
}

let endRound = (round) =>{
  // if(round.roundOver){
    let displayOver = `** Round over! ** You answered ${round.percentage}% of the questions correctly!`;
    return displayOver
  // }
}

module.exports = {
  takeTurn,
  endRound
}