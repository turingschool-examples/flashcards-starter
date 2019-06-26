class Card {
    constructor(id, question, answers, object) {
      this.question = question || [];
      this.answers = answers;
      this.correctAnswer = object;
    }
  }
  
  module.exports = Card;