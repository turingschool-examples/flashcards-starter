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
  correctAnswer = round.currentCard.correctAnswer;
  if (guess != correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  const currentIndex = round.deck.indexOf(round.currentCard)
  round.turns++
  round.deck.shift()
  round.currentCard = round.deck[0]
  if(round.currentCard === undefined) {
    round.currentCard = null
  } else {
    round.currentCard
  }
  return evaluateGuess(guess, correctAnswer)
}
module.exports = {
  createDeck, 
  countCards,
  createRound,
  takeTurn
}