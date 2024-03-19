function createCard(id, question, answers, correctAnswer) {
    let card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return card
}

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 'That is correct'
    } else {
        return 'That is incorrect'
    }
}

module.exports = {
    createCard,
    evaluateGuess,
}