function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
  return card;
}

function evaluateGuess(guess, correctAnswer) {
  // console.log('card: ', card)
  console.log('correctAnswer: ',correctAnswer)
  console.log('guess: ', guess)
  if (guess === correctAnswer) {
    return 'correct!';
  } else {
    return 'incorrect!';
  }
}

////// Iteration 2 /////////

function createDeck(cards) {

  return cards;
}









module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
}