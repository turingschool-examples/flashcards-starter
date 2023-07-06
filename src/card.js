function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

function createDeck() {
  const deck  = [];
  const args = Array.from(arguments);

  args.forEach(card => {
    deck.push(card);  
  });

  return deck;
}

function countCards(deck) {
  return deck.length;
}

module.exports = {
  createCard,
  createDeck,
  countCards, 
}