class Card {
  constructor(id, questions, answer, correctAnswer) {
    this.id = id;
    this.question = questions;
    this.answers = answer;
    this.correctAnswer = correctAnswer;

  }
}

module.exports = Card;
