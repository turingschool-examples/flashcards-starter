const flashcards = require('../src/data');

class ReportCard {
  constructor(round) {
    this.round = round;
  }


  getIncorrectQuestionResult(cardId, guess) {
    return {
      question: flashcards.prototypeData[cardId - 1].question,
      correctAnswer: flashcards.prototypeData[cardId - 1].correctAnswer,
      yourAnswer: guess,
      numberOfGuesses: 1,
    };
  }

  getIncorrectQuestionResults() {
    return this.round.answeredCardIds.incorrect.map((obj) => this.getIncorrectQuestionResult(obj.cardId, obj.guess));
  }

}

module.exports = ReportCard;