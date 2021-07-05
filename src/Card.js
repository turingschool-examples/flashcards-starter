class Card {
  constructor(id, question, possibleAnswers, answer) {
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = answer;
  }
};

module.exports = Card;
