class Card {
  constructor(id, question, options, answer) {
    this.id = id;
    this.question = question;
    this.answers = options;
    this.correctAnswer = answer;
  }
}

module.exports = Card;
