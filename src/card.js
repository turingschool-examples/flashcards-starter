const createCard = (index, question, answers, correctAnswer) => {
  const card = {
    id: index,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}



module.exports = { 
  createCard
  
};