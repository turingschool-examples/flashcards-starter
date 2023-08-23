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

function takeTurn(guess, round) {

  const answer = round.currentCard.correctAnswer;
  if (guess !== answer) {
    console.log('I am here!')
    round.incorrectGuesses.push(round.currentCard.id)
    
  }
  round.turns++;
  round.deck.shift();
  round.currentCard = round.deck[0];
 
    

  



module.exports = {
  createDeck, 
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect
}