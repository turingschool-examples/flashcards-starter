const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
});

const takeTurn = (guess, round) => {
  round.turns ++
  feedback = '';
  console.log(round.currentCard);
  if(guess === round.currentCard.correctAnswer) {
    feedback = 'correct!';
  }
  if(guess !== round.currentCard.correctAnswer) {
    feedback = 'incorrect!';
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1];
  return feedback;
}

module.exports = {
  createRound,
  takeTurn
}