class Card {
  constructor(cardId, question, possibleAnswers, correctAnswer) {
    this.id = cardId;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;