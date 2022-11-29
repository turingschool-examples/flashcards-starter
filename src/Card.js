class Card {
    constructor(id, question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = answer;
    }
}

module.exports = Card;