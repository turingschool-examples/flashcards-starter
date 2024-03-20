function createCard(id, question, answers, correctAnswer){
    card = {
        id: id, 
        question: question, 
        answers: answers, 
        correctAnswer: correctAnswer
    }
    return card
}

function evaluateGuess(guess, correctAnswer){
    if (guess === correctAnswer){
        return 'Correct!'
    } else {
        return 'Incorrect :('
    }
}

function createDeck(cards){
    deck = {
        cards: cards
    }
    return deck
}

function countCards(deck){
    return deck.length
}





module.exports = {
    createCard, 
    evaluateGuess, 
    createDeck, 
    countCards
}