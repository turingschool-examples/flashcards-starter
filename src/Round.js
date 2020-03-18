const Turn = require('../src/Turn')
const Game = require('../src/Game')
const Card = require('../src/Card');
const data = require('./data');
const prototypeQuestions = data.prototypeData;


class Round {
  constructor(deck, round = 1) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.totalIncorrects = 0;
    this.totalCorrects = 0;
    this.incorrectGuesses = []
    this.correctGuesses = []
    this.round = round
  }

  takeTurn(guess) {
    this.turns++
    // console.log(this.currentCard)
    var turn = new Turn(guess, this.currentCard)
    // console.log(turn.evaluateGuess())
    if (!turn.evaluateGuess()) {
      this.totalIncorrects++
      this.incorrectGuesses.push(this.currentCard.id)
      this.rotateCards()

    } else {
      this.totalCorrects++
      this.correctGuesses.push(this.currentCard.id)
      this.deck.shift()
      this.currentCard = this.deck[0]
    }
    // console.log(this.totalCorrects)
    // console.log(this.deck.length)
    // if (this.deck.length === this.totalCorrects) {
    //   // console.log('end round!!!')
    //   this.endRound()
    // }
    // console.log(this.currentCard)
    return turn.giveFeedback()
    // return turn;
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
    return (this.totalCorrects / (this.totalIncorrects + this.totalCorrects)) * 100;
  }

  endRound() {
    // console.log('end round function!')
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    this.round++;
    // let currentRound = this.round
    this.displayReportCard()

    // var game = new Game()
    // game.start()
    // game.start()
    // newRound(currentRound)
  }

  displayReportCard() {
    console.log('REPORT CARD')
    if (this.calculatePercentCorrect() === 100) {
      console.log('GREAT JOB! You got every question correct on the first attempt!')
    }
    let allCards = []
    for (let i = 0; i < prototypeQuestions.length; i++) {
      var newCard = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
      allCards.push(newCard)
    }
    // object {question id : times incorrect}
    let incorrectTracker = {};
    this.incorrectGuesses.forEach(el => {
      if (!incorrectTracker[el]) {
        incorrectTracker[el] = 1
      } else {
        incorrectTracker[el]+= 1
      }
    })
    for (let i = 1; i <= allCards.length; i++) {
      // console.log(typeof incorrectTracker[i])
      let attempts = incorrectTracker[i] + 1
      if (incorrectTracker[i] === undefined) {
        attempts = 1
      }
      if (attempts > 1) {
        console.log(`!!!Question #${i} Needs More Practice!!!`)
        console.log(`You needed ${attempts} attempts to get it correct...`)
        console.log(`Question #${i}: ${allCards[i -1].question}`)
        console.log(' ')
    // } else {
    //   console.log(`**Great Job On Question #${i}**`)
    //   console.log(`Question #${i}: ${allCards[i -1].question}`)
    // // console.log(incorrectTracker)
    //   }
    }
  }
}



    // displayReportCard() {
    //   console.log('Here is your Report Card!')
    //   // console.log(this.correctGuesses)
    //   let onlyOneIncorrects = []
    //   this.incorrectGuesses.forEach(el => {
    //     if (!onlyOneIncorrects.includes(el)) {
    //       onlyOneIncorrects.push(el)
    //     }
    //   })
    //   let correctsAndIncorrects = onlyOneIncorrects.concat(this.correctGuesses)
    //   let allCardsIndex = [];
    //   correctsAndIncorrects.forEach(el => {
    //     if (!allCards.includes(el)) {
    //       allCards.push(el)
    //     }
    //   })
    //   // console.log(allCards)
    //
    //
    //   for (let i = 0; i < allCards.length; i++) {
    //     let curCard = allCards[i]
    //     console.log(curCard)
    //     console.log(`Question #${curCard.id}: ${curCard.question}`)
    //   }
    // }

  // startNewRound() {
  //   console.log('round', this.round)
  //   let newRound = this.round
  //   var game = new Game(newRound)
  // }

}

module.exports = Round;
