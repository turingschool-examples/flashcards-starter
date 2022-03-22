class Card {
  constructor(id, question, answerOptions, answer) {
    this.id = id,
    this.question = question,
    this.answers = answerOptions,
    this.correctAnswer = answer
  }
}

module.exports = Card
