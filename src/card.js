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
    return 'Correct!';
  }
  return 'Incorrect!';
}

function createDeck(cards) {
  return cards;
}

function countCards(cards) {
  return cards.length;
}

function initRoundController(deck) {
  return {
    deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
}

function takeTurn(guess, round) {
  const outcome = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (outcome === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.turns++;
  round.currentCard = round.deck[round.turns];

  return outcome;
}

function calculatePercentCorrect(round) {
  const numberCorrect = round.turns - round.incorrectGuesses.length;
  return Math.round((numberCorrect / round.turns) * 100);
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  initRoundController,
  takeTurn,
  calculatePercentCorrect,
};
