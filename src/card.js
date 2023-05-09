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

    if (card.correctAnswer = guess) {
    return 'correct!'
    }
}


module.exports = {
createCard,
evaluateGuess
}