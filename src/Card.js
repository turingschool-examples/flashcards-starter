const Game = require('./Game');

class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
//
// class Card {
//   constructor(currentCard) {
//     this.id = currentCard.id;
//     this.question = currentCard.question;
//     this.answers = currentCard.answers;
//     this.correctAnswer = currentCard.correctAnswer;
//   }
// }

module.exports = Card;
