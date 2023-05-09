let createCard = (id, question, answers, correctAnswer) =>
  card = {
    id,
    question,
    answers,
    correctAnswer
  };

module.exports = {
  createCard
}