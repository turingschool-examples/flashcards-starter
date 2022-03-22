class Card {
    constructor(number, question, answerList, correctAnswer) {
        this.cardNum = number;
        this.question = question;
        this.answers = answerList;
        this.correctAnswer = correctAnswer;
    }
}

module.exports = Card;