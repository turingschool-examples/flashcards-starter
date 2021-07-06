class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers // to.deep.equal(['object', 'array', 'function'])
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card