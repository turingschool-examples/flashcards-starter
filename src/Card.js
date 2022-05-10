class Card {
  constructor(id, question, answers, correctAnswerObj) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswerObj;
  }
}

module.exports = Card;
