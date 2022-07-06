class Card {
  constructor(id, question, possibleAnswer, answer) {
    this.id = id;
    this.question = question;
    this.answers = possibleAnswer;
    this.correctAnswer = answer;
  }
}

module.exports = Card;
