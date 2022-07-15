const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
class Card {
    constructor(cardIdNumber, question, answers, correctAnswer) {
        this.cardIdNumber = cardIdNumber;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
};

module.exports = Card;