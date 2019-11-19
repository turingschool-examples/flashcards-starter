class Card {
  constructor(cardObj) {
    this.id = cardObj.id;
    this.question = cardObj.question;
    this.answers = cardObj.answers;
    this.correctAnswer = cardObj.correctAnswer;
  }
}

module.exports = Card;
