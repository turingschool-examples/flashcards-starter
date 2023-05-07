const createCard = (id, question, answers, correctAnswer) => {
  return card = {
    id,
    question,
    answers,
    correctAnswer
  };
};

const evaluateGuess = guess => guess === card.correctAnswer ? 'correct!' : 'incorrect!';

const createDeck = deck => ({cards: deck});

const countCards = deck => deck.cards.length;

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
};