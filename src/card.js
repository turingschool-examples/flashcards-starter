const createCard = (id, question, answers, correctAnswer) => {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer
  };
};






module.exports = {
    createCard,
    // createRound
  }