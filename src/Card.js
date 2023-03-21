class Card {
    constructor(id, question, answerSet, correctAnswer){
        this.id = id;
        this.question = question;
        this.answers = answerSet,
        this.correctAnswer = correctAnswer;
    }
}

module.exports = Card;