class Card {
  constructor(num, ask, ans, correct) {
    this.cardID = num;
    this.question = ask;
    this.answers = ans;
    this.correctAnswer = correct
  }
};

module.exports = Card;
