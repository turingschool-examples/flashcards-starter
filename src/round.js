const { evaluateGuess } = require('../src/card')

const createDeck = (cards) => {
  return {
    cards,
  }
}

const countCards = (deck) => {
  return deck.cards.length
}

const createRound = (deck) => {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
}

const takeTurn = (guess, round) => {
  const answer = round.currentCard.correctAnswer;
  if (guess !== answer) {
    round.incorrectGuesses.push(round.currentCard.id)
    
  }
    round.turns++;
    round.deck.shift();
    round.currentCard = round.deck[0];
 
    return evaluateGuess(guess, answer)
  }
    
const calculatePercentCorrect = (round) => {
  const numberCorrect = round.turns - round.incorrectGuesses.length
  return Math.round((numberCorrect / round.turns) * 100)
}
  
const endRound = (round) => {
  const percent = calculatePercentCorrect(round)
  return `** Round Over! ** You answered ${percent}% of the questions correctly!`
}


module.exports = {
  createDeck, 
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound
}