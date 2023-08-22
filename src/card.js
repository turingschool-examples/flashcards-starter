const createCard = (id, question, answers, correctAnswer) => {
  const card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  };
  return card;
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct';
  } else {
    return 'Incorrect';
  }
};

const createDeck = cards => {
  let deck = {
    cards: cards,
  };
  console.log(deck);
  return deck;
};

const countCards = arrOfCards => {
  return deck.cards.length;
};

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
};
