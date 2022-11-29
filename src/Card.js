class Card {
    constructor(id, question, choices, answer) {
        this.id = id;
        this.question = question;
        this.choices = choices;
        this.correctAnswer = answer;
    }
}

module.exports = Card;