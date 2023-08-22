const createCard = (id, question, answers, correctAnswer) => {
  const card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  };
  return card;
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct';
  } else {
    return 'Incorrect';
  }
};

module.exports = { createCard, evaluateGuess };
