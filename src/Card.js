class Card {
    constructor(cardId, question, answers, correctAnswer) {
        this.cardId = cardId;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
};

module.exports = Card;