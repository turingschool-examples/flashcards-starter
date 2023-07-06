const createCard = (num, question, answers, correctAnswer) => {
    const card = {
        id: num,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
    return card
}




module.exports = {
    createCard,
}