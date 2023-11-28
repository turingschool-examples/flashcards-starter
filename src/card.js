function createCard(id, question, answers, correctAnswer) {
let card = {
  id: id,
  question: question,
  answers: answers,
  correctAnswer: correctAnswer
}
return card;
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'Correct';
  } else {
    return 'Incorrect';
  }
}

// function createDeck(cards) {
// const deck = [];
// cards.forEach(card => {
//   deck.push(card);
// });
// return deck;
// }
function createDeck(cards) {
 const deck = cards;
 return deck;
}

function countCards(deck) {
  return deck.length;
}



module.exports = { createCard, 
  evaluateGuess,
  createDeck,
  countCards

};