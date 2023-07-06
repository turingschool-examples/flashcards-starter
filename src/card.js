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

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  initRoundController,
  takeTurn,
};
