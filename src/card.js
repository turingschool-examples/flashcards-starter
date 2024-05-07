function createCard(id, question, answers, correctAnswer ){
    let cards = {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
    return cards
}

function evaluateGuess(guess, correctAnswer){
    if(guess === correctAnswer){
        console.log('Correct!')
        return `Correct!`
    } else {
        console.log('Incorrect!')
        return `Incorrect!`
    }
}



module.exports = {
    createCard,
    evaluateGuess,
}