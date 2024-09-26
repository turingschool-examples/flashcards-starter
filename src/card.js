const createCard = (id, question, answers, correctAnswer) => {
    const card = {
        id,
        question,
        answers, 
        correctAnswer
    }
    return card
}

module.exports = {
    createCard
}