function createCard(id, question, possibleAnswers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: possibleAnswers,
    correctAnswer: correctAnswer
  }
}















module.exports = {
  createCard,
}