class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(answer) {
    return answer === this.correctAnswer;
  }
}
module.exports = Card;
