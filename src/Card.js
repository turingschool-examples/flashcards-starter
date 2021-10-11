class Card {
    constructor(id, question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correct;
    }
}

module.exports = Card;