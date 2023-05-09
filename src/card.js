let createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id:id, 
    question:question, 
    answers:answers, 
    correctAnswer:correctAnswer,
  }
  return card
};



let evaluateGuess = (guess, correctAnswer) => {
  console.log(correctAnswer.correctAnswer)
  if(correctAnswer.correctAnswer === guess){
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
}

module.exports = {
  createCard, 
  evaluateGuess 
}