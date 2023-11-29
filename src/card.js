const createCard = (id, question, answers, correctAnswer) => {
  return (card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  });
};

const evaluateGuess = (guest, correctAnswer) => {
  if (guest === correctAnswer) {
    return "correct!";
  } else {
    return "incorrect!";
  }
};

const createDeck = (cards) => {
  return cards;
};

const countCards = (deck) => {
  return deck.length;
};

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: [],
  };
}

function takeTurn(guess, round) {
  const currentCard = round.deck.cards[round.turns];
  const result = evaluateGuess(guess, currentCard.correctAnswer);

  if (result === "incorrect!") {
    round.incorrectGuesses.push(currentCard.id);
  }

  round.turns++;
  round.currentCard = round.deck.cards[round.turns];
  return result;
}

function calculatePercentCorrect(round) {
  const totalGuesses = round.turns;
  const correctGuesses = totalGuesses - round.incorrectGuesses.length;
  const percentCorrect = (correctGuesses / totalGuesses) * 100;

  return percentCorrect;
}

function endRound(round) {
  const percentCorrect = calculatePercentCorrect(round);
  return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  endRound,
};
