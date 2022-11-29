class Card {
  constructor(id, question, possibleAnswer, correctAnswer) {
    this.id = id
    this.question = question
    this.answers = possibleAnswer
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card