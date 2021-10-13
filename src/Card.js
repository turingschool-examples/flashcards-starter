class Card {
  constructor(id, question, answers, correct) {
    this.id = Date.now();
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correct;
  }
}






module.exports = Card
