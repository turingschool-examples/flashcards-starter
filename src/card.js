var createCard = (questionNum, question, answers, correctAnswer) => {
  return {
    id: questionNum,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  }
}

let evaluateGuess = ((guess, correctAnswer) => {
  if(guess === correctAnswer){
    return 'correct!'
  } else {
    return 'incorrect!'
  }
}); 


module.exports = {
  createCard,
  evaluateGuess
}