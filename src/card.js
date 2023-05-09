// function createCard(id, question, answers, correctAnswer) {
//   const card = {
//     id,
//     question,
//     answers,
//     correctAnswer
//   }
//   return card;
// }
 
const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

module.exports = { 
  createCard
};