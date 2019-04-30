class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id || Date.now();
    this.question = question || null;
    this.answers = answers || [];
    this.correctAnswer = correctAnswer || null;
  }
}

module.exports = Card;