// ROUND, DECK, AND CARD FUNCTIONS //

const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  };
  return card;
};

const evaluateGuess = (userGuess, card) => {
  if (userGuess === card.correctAnswer) {
    return 'correct!';
  }
  return 'incorrect!';
};

const createDeck = cards => {
  const deck = []; 
  cards.forEach(card => {
    deck.push(createCard(card.id, card.question, card.answers, card.correctAnswer));
  })
  return deck;
};

const countCards = deck => deck.length;

const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  };
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

const calculatePercentCorrect = round => {
  let percentCorrect = 100 - round.incorrectGuesses.length/round.turns * 100;
  if (!round.incorrectGuesses.length) {
    percentCorrect = 100;
  }
  return `${percentCorrect}%`;
};

const endRound = round => {
  const percentCorrect = calculatePercentCorrect(round);
  round.consoleLogMessage = `** Round over! ** You answered ${percentCorrect} of the questions correctly!`;
  console.log(round.consoleLogMessage);
  console.timeEnd('This game took you');
};

module.exports = { 
  createCard, 
  evaluateGuess, 
  createDeck, 
  countCards, 
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound 
};