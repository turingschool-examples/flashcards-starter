function createDeck(cards) {
    return cards;
  }
  
  function countCards(deck) {
    return deck.length;
  }
  
  function createCard(id, question, answers, correctAnswer) {
    return {
      id,
      question,
      answers,
      correctAnswer,
    };
  }
  module.exports = {
    createDeck,
    countCards,
    createCard,
  };
  