class Card {
    constructor(id, question, answer, obj) {
        this.id = id,
        this.question = question,
        this.answers = answer,
        this.correctAnswer = obj
    }
}

module.exports = Card;