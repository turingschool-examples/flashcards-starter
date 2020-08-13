class Card{
    constructor(id, question, potentialAnswers, correctAnswer){
        this.id = id;
        this.question = question;
        this.answers = potentialAnswers;
        this.correctAnswer = correctAnswer;
    }
}
module.exports = Card;