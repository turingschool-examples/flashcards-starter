const createRound = (deck) => ({
  deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
});

const takeTurn = (guess, round) => {
  round.turns ++;
  feedback = '';
  if(guess === round.currentCard.correctAnswer) {
    feedback = 'correct!';
  }
  if(guess !== round.currentCard.correctAnswer) {
    feedback = 'incorrect!';
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCard = round.deck[round.deck.indexOf(round.currentCard) + 1];
  return feedback;
};

const calculatePercentageCorrect = (round) => {
  correctPercentage = (round.incorrectGuesses.length / round.turns) * 100;
  return correctPercentage;
};

const endRound = (round) => {
  return `** Round over! ** You answered ${calculatePercentageCorrect(round)}% of the questions correctly!`
};

module.exports = {
  createRound,
  takeTurn,
  calculatePercentageCorrect,
  endRound
};