const createCard = (id,question,answers,correctAnswer) => {
    let card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return card
}

const evaluateGuess = (guess,card) => {

    if (card.correctAnswer === guess) {
     return 'correct!'
    } else {
     return 'incorrect!'
    }
}

const createDeck = (cards) => {

    let deck = {
        cards: cards
    } 

    return deck
}

const countDeck = (deck) => {

    return deck.cards.length
}



module.exports = {
createCard,
evaluateGuess,
createDeck,
countDeck
}