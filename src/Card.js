class Card {
  constructor(num, question, possibles, answer) {
    this.id = num;
    this.question = question;
    this.answers = possibles;
    this.correctAnswer = answer;
  }
}
module.exports = Card;
