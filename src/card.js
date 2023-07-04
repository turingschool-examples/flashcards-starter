function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
  return card;
}

function evaluateGuess(card, guess, correctAnswer) {
  console.log('card: ', card)
  console.log('correctAnswer: ',correctAnswer)
  console.log('guess: ', guess)
  if (guess === correctAnswer) {
    return 'correct!';
  } else {
    return 'incorrect!';
  }
}










module.exports = {
  createCard,
  evaluateGuess,
}