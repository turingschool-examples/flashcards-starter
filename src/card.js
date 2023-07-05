var createCard = (questionNum, question, answers, correctAnswer) => {
  return {
    id: questionNum,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
}




module.exports = {
  createCard,
}