function createCard(id, question, answers, correct) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correct,
  };
  return card;
}
// - Parameters (id: number, question: string, possibleAnswers: array of strings, correctAnswer: string

module.exports = { createCard };
