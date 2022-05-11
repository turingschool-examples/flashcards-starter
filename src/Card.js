
class Card{
    constructor(id, cardQuestion, cardAnswers, correctAnswer){
        this.id = id;
        this.question = cardQuestion;
        this.answers = cardAnswers;
        this.correctAnswer = correctAnswer;
    }
}


module.exports = Card;