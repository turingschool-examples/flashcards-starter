class Card{
    constructor(questionObj){
    this.questionObj
    this.id = questionObj.id;
    this.question = questionObj.question;
    this.answers = questionObj.answers;
    this.correctAnswer = questionObj.correctAnswer;
    }
}


module.exports = Card;