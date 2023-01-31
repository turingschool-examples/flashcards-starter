class Card {
  constructor(cardNumber, question, answers, correctAnswer) {
    this.id = cardNumber;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;