const {evaluateGuess, calculatePercentCorrect, createDeck} = require('./card');
const {sampleData } = require("./sub-data");

let createRound = deck => {
  let round = {
    deck: deck, 
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses:[],
  }
  return round
}

const takeTurn = (guess, round) => {
  let evaluate = evaluateGuess(guess, round.currentCard.correctAnswer);
    if(evaluate === 'Incorrect!'){
      round.incorrectGuesses.push(round.currentCard.id)
   }
    round.turns += 1
    round.currentCard = round.deck[round.turns]
  return evaluate
}

let endRound = (round) =>{
  console.log(`** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`);
  return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`
}

module.exports = {
  takeTurn,
  endRound,
  createRound
}