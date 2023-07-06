const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'correct!'
  } else {
    return 'incorrect!'
  }
}

const createDeck = (cards) => {
    return cards
}

const countCards = deck => deck.length

module.exports = {
  createCard,
  evaluateGuess, 
  createDeck,
  countCards,
};
