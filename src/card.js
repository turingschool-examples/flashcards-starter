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
    if(guess === correctAnswer){
        return 'correct!'
    }
    return 'incorrect!'
}



module.exports = {
    createCard,
    evaluateGuess
}