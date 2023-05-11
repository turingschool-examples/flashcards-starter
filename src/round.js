function createRound(deck, currentCard, turns, incorrectGuesses) {
  const round = {
    deck: deck,
    currentCard: currentCard,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  return round;
}

function takeTurn(guess, round) {
  console.log(guess);
  console.log(round.currentCard.correctAnswer);
  if (guess === round.currentCard.correctAnswer) {
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
}

module.exports = {
  createRound,
  takeTurn
}