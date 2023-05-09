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
var deck = cards
return deck
}

function countDeck(deck){
  return deck.length
}

function createRound(deck){
  var round = {
    deck: deck,
  }
  return round
}

module.exports = { 
  createCard,
  evaluateGuess,
  createDeck,
  countDeck,
  createRound,
};