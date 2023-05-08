function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
};

function evaluateGuess(userGuess, card) {
  if (userGuess === card.correctAnswer) {
    return 'correct!'
  }
  return 'incorrect!'
};

function createDeck(cards) {
  return cards;
}

function countCards(deck) {
  return deck.length;
}
module.exports = { createCard, evaluateGuess, createDeck, countCards };