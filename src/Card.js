class Card {
  constructor(flashcard) {
    this.id = flashcard.id;
    this.question = flashcard.question;
    this.answers = flashcard.answers;
    this.correctAnswer = flashcard.correctAnswer;
  }
}

module.exports = Card;