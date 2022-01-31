class Card {
  constructor(num, question, optAnswers, correctAnswer) {
    this.num = num;
    this.question = question;
    this.answers = optAnswers;
    this.correctAnswer = correctAnswer;
  }
}




module.exports = Card;