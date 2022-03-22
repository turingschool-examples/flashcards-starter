class Card {
  constructor(num, question, possibleAnswer, correctAnswer) {
    this.id = num;
    this.question = question;
    this.possibleAnswer = possibleAnswer;
    this.correctAnswer = correctAnswer
  }
}


module.exports = Card;
