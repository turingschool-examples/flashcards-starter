class Card {
  constructor(index, question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.id = index;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;