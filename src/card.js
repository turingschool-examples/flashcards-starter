function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card
}

function evaluateGuess(guess, correctAnswer){
if (guess === correctAnswer){
  return 'correct!'
} else
return 'incorrect!'
}

function createDeck(cards){
var deck = {
  cards: cards
}
return deck
}

function countDeck(deck){
  return deck.cards.length
}

module.exports = { 
  createCard,
  evaluateGuess,
  createDeck,
  countDeck,
};