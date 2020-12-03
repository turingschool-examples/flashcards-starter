class Card {
  constructor(id, question, possibleAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;
