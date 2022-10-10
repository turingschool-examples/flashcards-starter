class Card {
    constructor(number, question, answers, correctAnswer) {
        this.number = number;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}

module.exports = Card;