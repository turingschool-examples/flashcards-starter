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
    feedback = 'correct!'
  }
  if(guess !== round.currentCard.correctAnswer) {
    feedback = 'incorrect!'
  }
  return feedback;
}
module.exports = {
  createRound,
  takeTurn
}