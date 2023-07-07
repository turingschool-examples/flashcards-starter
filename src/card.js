// ../src/card.js

function createCard(id, question, answers, correctAnswer) {
    return {
      id,
      question,
      answers,
      correctAnswer,
    };
  }


module.exports = {
    createCard,
}