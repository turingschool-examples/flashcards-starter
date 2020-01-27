class Card {
  constructor(id, question, answers, solution) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = solution;
  }
}

module.exports = Card;
