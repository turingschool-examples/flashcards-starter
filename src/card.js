const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer,
  }
}

const evaluateGuess = (guess, correctAnswer) => {
 if(guess === correctAnswer){
  return 'correct!'
 } else {
  return 'incorrect!'
 }
}

module.exports = {
  createCard,
  evaluateGuess
}