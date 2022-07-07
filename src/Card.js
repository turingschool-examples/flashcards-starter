class Card {
    constructor(id, question, answer, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = answer;
        this.correctAnswer = correctAnswer;
    }
}


module.exports = Card;