class Card {
  constructor(currentCard) {
    this.id = currentCard.id;
    this.question = currentCard.question;
    this.answers = currentCard.answers;
    this.correctAnswer = currentCard.correctAnswer;
  }
}

module.exports = Card;