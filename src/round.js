function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round;
}

function evaluateGuess(guess, card) {
  if (guess === card.correctAnswer) {
    return 'Correct!';
  } else {
    return 'Incorrect!';
  }
}

function takeTurn(guess, round) {
  let result = evaluateGuess(guess, round.currentCard)
  if (result === 'Incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns++;
  round.currentCard = round.deck.cards[round.turns];
  console.log(round);
  return result;
}

module.exports = {
  createRound,
  takeTurn,
  evaluateGuess
}