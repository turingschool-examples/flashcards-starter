class Card {
  constructor (id, question, answerChoices, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answerChoices;
    this.correctAnswer = correctAnswer;
  };
};

module.exports = Card;
