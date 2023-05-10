function createRound(deck, currentCard) {
  // console.log(deck);
  const round = {
    deck: deck,
    currentCard: currentCard,
  }
  // console.log(round);
  return round;
}

module.exports = {
  createRound
}