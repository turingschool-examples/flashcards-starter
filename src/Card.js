

class Card{
  constructor(cardID, cardQuestion, answers, correctAnswer) {
    this.cardIdentification = cardID,
    this.question = cardQuestion,
    this.answers =  answers,
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;