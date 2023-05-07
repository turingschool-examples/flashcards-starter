const createCard = (id, question, answers, correctAnswer) => card = ({id, question, answers, correctAnswer});

const evaluateGuess = guess => guess === card.correctAnswer ? 'correct!' : 'incorrect!';

const createDeck = deck => ({cards: deck});

const countCards = deck => deck.cards.length;

const createRound = deck => ({deck: deck, currentCard: deck.cards[0], turns: 0, incorrectGuesses: []});

const takeTurn = (guess, round) => {
  let feedback = 'correct!';
  if (guess !== round.currentCard.correctAnswer) {
    round.incorrectGuesses.push(round.currentCard);
    feedback = 'incorrect!';
  }
  round.turns++;
  round.currentCard = round.deck.cards[round.turns];
  return feedback;
};

const calculatePercentCorrect = round => Math.floor(((round.turns - round.incorrectGuesses.length) / round.turns) * 100);

const endRound = round => `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`;

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