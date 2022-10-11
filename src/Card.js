class Card {
    constructor(id, question, userAnswers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = userAnswers;
        this.correctAnswer = correctAnswer;
    }
}

module.exports = Card;