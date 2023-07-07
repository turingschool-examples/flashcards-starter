function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer,
  };
}

function createDeck(cards) {
  return cards;
}

function countCards(cards) {
  return cards.length;
}

module.exports = {
  createCard,
  createDeck,
  countCards,
};
