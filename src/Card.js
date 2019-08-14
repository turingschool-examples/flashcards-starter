class Card {
  constructor(id, question, possibleAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

// anothe way to write this, but have to fix all my tests
// constructor(cardObj) {
//   this.id = cardObj.id;
//   this.question = cardObj.question;
//   this.answers = cardObj.possibleAnswers;
//   this.correctAnswer = cardObj.correctAnswer;
//   }
// }

module.exports = Card;
