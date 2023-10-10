// each card has an id, a question, possible answers, and a correct answer
// evaluateGuess() function returns either correct or incorrect

function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

module.exports = {
  createCard
}