class Card {
  constructor(id, question, list, answer) {
    this.question = question;
    this.answers = list;
    this.correctAnswer = answer;
  }
}

module.exports = Card;
