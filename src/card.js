function createCard(id, question, answers, correct) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correct,
  };
  return card;
}

function evaluateGuess(guess, card) {
  if (card.correctAnswer === guess) {
    return "correct!";
  } else {
    return `incorrect!`;
  }
}

module.exports = { createCard, evaluateGuess };
