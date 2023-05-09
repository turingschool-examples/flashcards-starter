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
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round;
};

const takeTurn = (userGuess, round) => {
  let feedback = 'correct!';
  if (userGuess !== round.currentCard.correctAnswer) {
    round.incorrectGuesses.push(round.currentCard.id);
    feedback = 'incorrect!';
  }

  round.turns++;
  round.deck.shift();
  round.currentCard = round.deck[0];
  return feedback;
};

module.exports = { 
  createCard, 
  evaluateGuess, 
  createDeck, 
  countCards, 
  createRound,
  takeTurn 
};