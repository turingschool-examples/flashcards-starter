function createCard(id, question, answers, correctAnswer) {
    const newCard = {
        id,
        question,
        answers,
        correctAnswer
    }
    return newCard;
}

module.exports = { createCard }
