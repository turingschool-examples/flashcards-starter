function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card
}

function evaluateGuess(guess, correctAnswer){
if (guess === correctAnswer){
  return 'correct!'
} else
return 'incorrect!'
}

module.exports = { 
  createCard,
  evaluateGuess
};