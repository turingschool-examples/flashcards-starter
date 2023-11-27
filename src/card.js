const createCard = (id, question, answers, correctAnswer) => {
    return card = {
        id: id, 
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}


module.exports = {
    createCard,
}