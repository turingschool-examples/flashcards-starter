// function createCard(id, question, answers, correctAnswer) {
//   return {
//     id: id,
//     question: question,
//     answers: answers,
//     correctAnswer: correctAnswer
//   };
// }

const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return true
  } else {
    return false
  }
}

const createDeck = (cards) => {
    // return array of objects
    // deck = []
    // newCard = createCard(cards)

    // deck.push(newCard)
    // return deck
    return cards
}

const countCards = deck => deck.length


module.exports = {
  createCard,
  evaluateGuess, 
  createDeck,
  countCards
};
