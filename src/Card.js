class Card {
  constructor(cardNum, question, possibleAnswers, correctAnswer) {
    this.id = cardNum;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }

}

module.exports = Card;
