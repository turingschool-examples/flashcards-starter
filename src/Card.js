// Card represents a single flashcard
// import prototypeData from './data.js'

class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id
    this.question = question
    this.answers = answers
    this.correctAnswer = correctAnswer
  }
}

module.exports = Card
