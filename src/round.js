const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.counter = 0;
    this.incorrectGuess = [];
    this.correctGuess = [];
    this.storedQuestion = [];
    this.storedCard = [];
    this.grade = [];
  }

  takeTurn(guess) {
    let cardPlayed = this.returnCurrentCard();
    let turn = new Turn(guess, cardPlayed);
    this.counter += 1;
    turn.evaluateGuess() ? this.correctGuess.push(guess) : this.incorrectGuess.push(guess);
    turn.evaluateGuess() ? null : this.storedQuestion.push(turn.returnCard(cardPlayed).id);
    turn.evaluateGuess() ? null : this.storedCard.push(turn.returnCard(cardPlayed).correctAnswer);
    this.deck.cards.shift();
    this.counter;
    return turn.giveFeedback();
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  calculatePercentCorrect() {
    var total = (this.correctGuess.length + this.incorrectGuess.length);
    return parseInt((this.correctGuess.length / total) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }

  reportNumber() {
    console.log(`** Round over! ** You answered ${this.incorrectGuess.length} questions wrong.`);
    return `** Round over! ** You answered ${this.incorrectGuess.length} questions wrong.`;
  }

  printReportCard() {
    for (var i = 0; i < this.storedQuestion.length; i++) {
      this.grade = {cardID: `${this.storedQuestion[i] }`, AnswerGiven: `${this.incorrectGuess[i]}`, correctAnswer: `${this.storedCard[i]}`};
      console.table(this.grade);
    }
    return `** Round over! ** Questions are: ${this.storedQuestion }`;
  }
}


module.exports = Round;
