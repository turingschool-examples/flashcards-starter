class Card {
    constructor(cardIdNumber, question, answers, correctAnswer) {
        this.cardIdNumber = cardIdNumber;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
};

module.exports = Card;