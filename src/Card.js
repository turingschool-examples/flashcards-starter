

class Card {
    constructor(id, question, possible, answer) {
        this.id = id;
        this.question = question;
        this.answers = possible;
        this.correctAnswer = answer;
    }
};

module.exports = Card;

