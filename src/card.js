function createCard(id, question, answers, correctAnswer){
    let card = {
        id,
        question,
        answers,
        correctAnswer
    }
    return card
};

module.exports = {
    createCard,
};