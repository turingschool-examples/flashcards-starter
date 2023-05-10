function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer,
  };
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return `correct!`;
  } else {
    return `incorrect!`;
  }
}

function createDeck(deck) {
  return deck;
}

function countCards(deck) {
  return deck.length;
}

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
}



module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
};
