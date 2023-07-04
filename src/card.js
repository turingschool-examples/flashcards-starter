// function createCard(id, question, answers, correctAnswer) {
//   return {
//     id: id,
//     question: question,
//     answers: answers,
//     correctAnswer: correctAnswer
//   };
// }

createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return true
  } else {
    return false
  }
}

module.exports = {
  createCard,
  evaluateGuess
};
