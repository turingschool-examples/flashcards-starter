class Card {
  constructor(cardNum, question, possibleAnswers, correctAnswer) {
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }

}

module.exports = Card;
