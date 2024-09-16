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
    var currentDeck = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
    currentDeck.currentCard = deck[currentDeck.turns]
    return currentDeck
}

function takeTurn(round) {
    round.turns++
}

module.exports = {
    createCard,
    evaluateGuess,
    countCards,
    createRound,
    takeTurn
}