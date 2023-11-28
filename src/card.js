const createCard = (id, question, answers, correctAnswer) => {
    return card = {
        id: id, 
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}

const evaluateGuess = (guest, correctAnswer) => {
    if(guest === correctAnswer){
        return "correct!"
    } else {
        return "incorrect!"
    }
}

const createDeck = (cards) => {
    return cards;
  }

const countCards = (deck) => {
    return deck.length
}

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
}