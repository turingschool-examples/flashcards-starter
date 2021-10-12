class Card {
  constructor(question, possibleAnswers, correctAnswers) {
    this.id = Date.now();
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswers = correctAnswers;
  };
};


module.exports = Card;
