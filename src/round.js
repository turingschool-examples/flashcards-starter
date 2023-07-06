const { 
  createCard, 
  evaluateGuess, 
  createDeck,
  countCards
} = require('./card');

const createRound = (deck, currentCard = deck[0], turns = 0, incorrectGuesses = []) => {
  return {
    deck,
    currentCard,
    turns,
    incorrectGuesses
  }
}
  
const takeTurn = (guess, round) => {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer)

  if (result === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }

  round.turns++;  
  round.currentCard = round.deck[round.turns]

  return result     
}

const calculatePercentCorrect = (round) => {
  let incorrectGuesses = round.incorrectGuesses.length
        
  return (round.turns - incorrectGuesses) / round.turns * 100
}

const endRound = (round) => {
  // console.log(round)
  percentageCorrect = calculatePercentCorrect(round)
  console.log(`** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`)
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
};
  