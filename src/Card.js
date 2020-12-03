class Card {
    constructor(id, question, answers, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        console.log(this)
    }
}






module.exports = Card;