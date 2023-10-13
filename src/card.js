const { prototypeData } = require("./data")

function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!"
  } else {
    return "incorrect!"
  }
}

function createDeck(prototypeData) {
  const deck = []
  prototypeData.forEach((Object) => {
    deck.push(Object)
  })
  return deck;
}

function countCards(deck) {
  return deck.length
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
}