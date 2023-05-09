const createCard = () => {
  const card = {
    id: 1,
    question: 'What allows you to define a set of related information using key-value pairs?',
    answers: ['object', 'array', 'function'],
    correctAnswer: 'object'
  }
  return card;
}

module.exports = { 
  createCard
  
};