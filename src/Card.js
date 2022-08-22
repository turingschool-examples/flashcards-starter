class Card {
  constructor(id, question, choices, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = choices;
    this.correctAnswer = correctAnswer;
  };
};


module.exports = Card;
