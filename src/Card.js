class Card {
    constructor(num, question, answers, correctAnswer) {
        this.id = num;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };
    
};

module.exports = Card;