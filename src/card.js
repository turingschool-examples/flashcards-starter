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

function countCards(card1, card2, card3, card4, card5) {
    var deck = []
    var cards = [card1, card2, card3, card4, card5]
    for (i = 0; i < cards.length; i++) {
        if (cards[i]) {
            deck.push(cards[i])
        }
    }
    return deck
}

module.exports = {
    createCard,
    evaluateGuess,
    countCards
}