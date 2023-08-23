function createCard(id, question, answers, correct) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correct,
  };
  return card;
}

function evaluateGuess(guess, card) {
  if (card.correctAnswer === guess) {
    return "correct!";
  } else {
    return `incorrect!`;
  }
}

function createDeck(cards) {
  let deck = cards;
  return deck;
}

function countCards(deck) {
  let deckCount = deck.length;
  return deckCount;
}

module.exports = { createCard, evaluateGuess, createDeck, countCards };
