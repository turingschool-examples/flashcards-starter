const Turn = require('../src/Turn')
const Card = require('../src/Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck, round = 1) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.incorrectGuesses = []
    this.correctGuesses = []
    this.round = round
  }

  takeTurn(guess) {
    this.turns++
    var turn = new Turn(guess, this.currentCard)
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      this.rotateCards()
    } else {
      this.correctGuesses.push(this.currentCard.id)
      this.deck.shift()
      this.currentCard = this.deck[0]
    }
    return turn.giveFeedback()
  }

  rotateCards() {
    this.deck.shift(this.currentCard)
    this.deck.push(this.currentCard)
    this.currentCard = this.deck[0]
  }

  returnCurrentCard() {
    return this.currentCard
  }

  calculatePercentCorrect() {
    return (this.correctGuesses.length /
      (this.incorrectGuesses.length + this.correctGuesses.length)) * 100;
  }

  endRound() {
    console.log('')
    console.log(`**Round Over!** You answered
      ${this.calculatePercentCorrect()}% of the questions correctly!`)
    this.round++;
    this.displayReportCard()
  }

  displayReportCard() {
    console.log('')
    console.log('~~~REPORT CARD~~~')
    console.log('')
    if (this.calculatePercentCorrect() === 100) {
      console.log('GREAT JOB! You got every question correct on the first attempt!')
    }
    let allCards = []
    // for (let i = 0; i < prototypeQuestions.length; i++) {
    //   var newCard =
    //     new Card(prototypeQuestions[i].id, prototypeQuestions[i].question,
    //       prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
    //   allCards.push(newCard)
    // }
    prototypeQuestions.forEach(el => {
      const indexPos = prototypeQuestions.indexOf(el)
      var newCard =
         new Card(prototypeQuestions[indexPos].id, prototypeQuestions[indexPos].question,
           prototypeQuestions[indexPos].answers, prototypeQuestions[indexPos].correctAnswer)
       allCards.push(newCard)
    })
    let incorrectTracker = {};
    this.incorrectGuesses.forEach(el => {
      if (!incorrectTracker[el]) {
        incorrectTracker[el] = 1
      } else {
        incorrectTracker[el] += 1
      }
    })
    for (let i = 1; i <= allCards.length; i++) {
      let attempts = incorrectTracker[i] + 1
      if (incorrectTracker[i] === undefined) {
        attempts = 1
      }
      if (attempts > 1) {
        console.log(`!!!Question #${i} Needs More Practice!!!`)
        console.log(`You needed ${attempts} attempts to get it correct...`)
        console.log(`Question #${i}: ${allCards[i - 1].question}`)
        console.log(' ')
      }
    }
  }
}

}

module.exports = Round;
