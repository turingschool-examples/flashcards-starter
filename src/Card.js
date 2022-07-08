class Card {
    constructor(id, question, answers, correct) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correct;
    }
}

module.exports = Card;