function createRound(deck, currentCard, turns) {
  const round = {
    deck: deck,
    currentCard: currentCard,
    turns: turns
  }
  // console.log(round);
  return round;
}

module.exports = {
  createRound
}