function createCard(id, question, answers, correctAnswer) {
  card = {
    id,
    question,
    answers,
    correctAnswer
  }
  return card;
}

module.exports = {
  createCard
}