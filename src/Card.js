class Card {
  constructor(cardId, inquiry, possibleAnswers, answer) {
    this.id = cardId;
    this.question = inquiry;
    this.answers = possibleAnswers;
    this.correctAnswer = answer;
  }
}

module.exports = Card
