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

// function checkForWin(name, winningWord) {
//   const player = {
//     name,
//     winningWord: []
//   }
//   return player;
// }

const checkForWin = (name, winningWord) => ({
  name,
  winningWord
});


module.exports = { 
  createCard,
  checkForWin
};