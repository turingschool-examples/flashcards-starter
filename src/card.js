const createCard = (id, question, answers, correctAnswer) => {
  return card = {
    id,
    question,
    answers,
    correctAnswer
  };
};

const evaluateGuess = guess => guess === card.correctAnswer ? 'correct!' : 'incorrect!';

module.exports = {
  createCard,
  evaluateGuess
};