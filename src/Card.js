class Card{
    constructor(num,question,answers,solution){
        this.id = num,
        this.question = question,
        this.answers = answers,
        this.correctAnswer = solution
    }
} 

module.exports = Card;
