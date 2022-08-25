class Card {
  constructor(id, question, userAnswers, correctAnswers) {
    this.id = id
    this.question = question
    this.answers = userAnswers
    this.correctAnswer = correctAnswers
  }
}


module.exports = Card
