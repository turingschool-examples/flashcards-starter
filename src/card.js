function createCard(id, question, answers, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}

function countCards(cards) {
    return cards
}

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

module.exports = {
    createCard,
    evaluateGuess,
    countCards,
    createRound
}