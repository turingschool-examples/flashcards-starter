class Card {
  constructor(index, question, answers, correctAnswer) {
    this.index = index
    this.question = question
    this.answers = answers
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card;