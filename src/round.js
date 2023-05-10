function createRound(deck, currentCard, turns, incorrectGuesses) {
  const round = {
    deck: deck,
    currentCard: currentCard,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  // console.log(round);
  return round;
}

module.exports = {
  createRound
}