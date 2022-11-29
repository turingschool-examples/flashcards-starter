class Card {
    constructor(cardInfo) {
        this.id = cardInfo.id
        this.question = cardInfo.question
        this.answers = cardInfo.answers
        this.correctAnswer = cardInfo.correctAnswer
    }
}

module.exports = Card