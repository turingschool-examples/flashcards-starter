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
    var deck = [];
    cards.forEach((card) => {
        if (card) {
            deck.push(card);
        }
    });
    return deck;
}

module.exports = {
    createCard,
    evaluateGuess,
    countCards
}