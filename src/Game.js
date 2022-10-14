const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./turn')

class Game {
  constructor() {
    this.currentRound = 0
  }
  createCards() {
    const card1 = new Card(prototypeQuestions[0].id, prototypeQuestions[0].question, prototypeQuestions[0].answers, prototypeQuestions[0].correctAnswer)
    const card2 = new Card(prototypeQuestions[1].id, prototypeQuestions[1].question, prototypeQuestions[1].answers, prototypeQuestions[1].correctAnswer)
    const card3 = new Card(prototypeQuestions[2].id, prototypeQuestions[2].question, prototypeQuestions[2].answers, prototypeQuestions[2].correctAnswer)
    const card4 = new Card(prototypeQuestions[3].id, prototypeQuestions[3].question, prototypeQuestions[3].answers, prototypeQuestions[3].correctAnswer)
    const card5 = new Card(prototypeQuestions[4].id, prototypeQuestions[4].question, prototypeQuestions[4].answers, prototypeQuestions[4].correctAnswer)
    const card6 = new Card(prototypeQuestions[5].id, prototypeQuestions[5].question, prototypeQuestions[5].answers, prototypeQuestions[5].correctAnswer)
    const card7 = new Card(prototypeQuestions[6].id, prototypeQuestions[6].question, prototypeQuestions[6].answers, prototypeQuestions[6].correctAnswer)
    const card8 = new Card(prototypeQuestions[7].id, prototypeQuestions[7].question, prototypeQuestions[7].answers, prototypeQuestions[7].correctAnswer)
    const card9 = new Card(prototypeQuestions[8].id, prototypeQuestions[8].question, prototypeQuestions[8].answers, prototypeQuestions[8].correctAnswer)
    const card10 = new Card(prototypeQuestions[9].id, prototypeQuestions[9].question, prototypeQuestions[9].answers, prototypeQuestions[9].correctAnswer)
    const card11 = new Card(prototypeQuestions[10].id, prototypeQuestions[10].question, prototypeQuestions[10].answers, prototypeQuestions[10].correctAnswer)
    const card12 = new Card(prototypeQuestions[11].id, prototypeQuestions[11].question, prototypeQuestions[11].answers, prototypeQuestions[11].correctAnswer)
    const card13 = new Card(prototypeQuestions[12].id, prototypeQuestions[12].question, prototypeQuestions[12].answers, prototypeQuestions[12].correctAnswer)
    const card14 = new Card(prototypeQuestions[13].id, prototypeQuestions[13].question, prototypeQuestions[13].answers, prototypeQuestions[13].correctAnswer)
    const card15 = new Card(prototypeQuestions[14].id, prototypeQuestions[14].question, prototypeQuestions[14].answers, prototypeQuestions[14].correctAnswer)
    const card16 = new Card(prototypeQuestions[15].id, prototypeQuestions[15].question, prototypeQuestions[15].answers, prototypeQuestions[15].correctAnswer)
    const card17 = new Card(prototypeQuestions[16].id, prototypeQuestions[16].question, prototypeQuestions[16].answers, prototypeQuestions[16].correctAnswer)
    const card18 = new Card(prototypeQuestions[17].id, prototypeQuestions[17].question, prototypeQuestions[17].answers, prototypeQuestions[17].correctAnswer)
    const card19 = new Card(prototypeQuestions[18].id, prototypeQuestions[18].question, prototypeQuestions[18].answers, prototypeQuestions[18].correctAnswer)
    const card20 = new Card(prototypeQuestions[19].id, prototypeQuestions[19].question, prototypeQuestions[19].answers, prototypeQuestions[19].correctAnswer)
    const card21 = new Card(prototypeQuestions[20].id, prototypeQuestions[20].question, prototypeQuestions[20].answers, prototypeQuestions[20].correctAnswer)
    const card22 = new Card(prototypeQuestions[21].id, prototypeQuestions[21].question, prototypeQuestions[21].answers, prototypeQuestions[21].correctAnswer)
    const card23 = new Card(prototypeQuestions[22].id, prototypeQuestions[22].question, prototypeQuestions[22].answers, prototypeQuestions[22].correctAnswer)
    const card24 = new Card(prototypeQuestions[23].id, prototypeQuestions[23].question, prototypeQuestions[23].answers, prototypeQuestions[23].correctAnswer)
    const card25 = new Card(prototypeQuestions[24].id, prototypeQuestions[24].question, prototypeQuestions[24].answers, prototypeQuestions[24].correctAnswer)
    const card26 = new Card(prototypeQuestions[25].id, prototypeQuestions[25].question, prototypeQuestions[25].answers, prototypeQuestions[25].correctAnswer)
    const card27 = new Card(prototypeQuestions[26].id, prototypeQuestions[26].question, prototypeQuestions[26].answers, prototypeQuestions[26].correctAnswer)
    const card28 = new Card(prototypeQuestions[27].id, prototypeQuestions[27].question, prototypeQuestions[27].answers, prototypeQuestions[27].correctAnswer)
    const card29 = new Card(prototypeQuestions[28].id, prototypeQuestions[28].question, prototypeQuestions[28].answers, prototypeQuestions[28].correctAnswer)
    const card30 = new Card(prototypeQuestions[29].id, prototypeQuestions[29].question, prototypeQuestions[29].answers, prototypeQuestions[29].correctAnswer)
    const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]
    return cards
  }
  createDeck() {
    const deck = new Deck(this.createCards())
    return deck
  }
  createRound() {
    const round = new Round(this.createDeck())
    return round
  }
  start() {
    this.currentRound++
    this.createCards()
    const myDeck =  this.createDeck()  
    const myRound = this.createRound()
    this.printMessage(myDeck, myRound)
    this.printQuestion(myRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;