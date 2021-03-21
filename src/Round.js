const Turn = require("./Turn");
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Card = require('./Card');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.deckCards[this.turns];
  }

  takeTurn(userGuess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(userGuess, currentCard);
    this.turns++;
    turn.evaluateGuess();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correct = (this.turns - this.incorrectGuesses.length);
    const percentCorrect = ((correct / this.turns) * 100);
    return Math.round(percentCorrect);
  }

  endRound() {
    const message = `**Round over!**
    You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // eslint-disable-next-line no-console
    console.log(message);
    const cards = prototypeQuestions.filter(question => {
      if (this.incorrectGuesses.includes(question.id)) {
        return question
      }
    })
      .map(question => {
        return new Card(
          question.id, 
          question.question, 
          question.answers, 
          question.correctAnswer)
      })
    const deck = new Deck(cards);
    return new Round(deck);
  }
}


module.exports = Round;