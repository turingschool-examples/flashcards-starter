const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
};

const evaluateGuess = (userGuess, card) => {
  if (userGuess === card.correctAnswer) {
    return 'correct!'
  }
  return 'incorrect!'
};

const createDeck = cards => cards;

const countCards = deck => deck.length;

const createRound = (deck) => {
  let round = {
    deck: deck
  }
  return round;
}

module.exports = { 
  createCard, 
  evaluateGuess, 
  createDeck, 
  countCards, 
  createRound 
};