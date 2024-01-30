const data = require('./data');
const prototypeQuestions = data.prototypeData;

function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer
  }
}

module.exports = {
    createCard
}