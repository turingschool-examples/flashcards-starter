class Card {
    constructor(id, question, possibleAnswers, correctAnswer) {
        this.id = (typeof id === "number") ? id : undefined;
        this.question = question;
        this.answers = Array.isArray(possibleAnswers) ? possibleAnswers : undefined;
        this.correctAnswer = correctAnswer;
    }
}

module.exports = Card;