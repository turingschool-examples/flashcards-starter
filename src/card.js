const data = require('./data');
const prototypeQuestions = data.prototypeData;

function createCard(id, question, answers, correctAnswer) {
//takes 4 arguments
//input object OR number, string, array of strings, & string
//output object
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