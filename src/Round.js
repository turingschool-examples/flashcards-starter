const prototypeData = require('./data');
const Deck = require('./Deck.js')
const Turn = require('./Turn.js')


let deck = new Deck(prototypeData)

class Round {
  constructor(deck){
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = []
  }

  returnCurrentCard(){
    return this.deck[this.turns]
  }

  takeTurn(answer){
    let turn = new Turn();
    turn.returnGuess(answer)
    let check  = turn.evaluateGuess();
    if(check = 'Incorrect!'){
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turns += 1;
    this.returnCurrentCard()
  }

  calculatePercentCorrect(){
    this.incorrectGuesses.length * 100 / this.turns
  }

  endRound(percentage){
    return `Round over. You answered ${percentage} of the questions correctly!`
  }
}

module.exports = Round;