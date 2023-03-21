class Card {
  constructor(card) {
    this.id = card.id;
    this.question = card.question;
    this.answers = [""];
    this.correctAnswer = card.correctAnswer;
  }
}

module.exports = Card; 