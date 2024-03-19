function createCard(id, question, answers, object){
    card = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: object
    }
    return card
}

function evaluateGuess(guess, correctAnswer){
    if (guess === correctAnswer){
        console.log(guess)
        console.log(correctAnswer)
        return 'correct!'
    } else return 'incorrect!'
}

module.exports = {
    createCard,
    evaluateGuess,
}