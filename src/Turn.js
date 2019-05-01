const Card = require('./Card.js')

class Turn {
  constructor(){
    this.playerGuess = '',
    this.card = {}
  }

  returnGuess(input){
    this.playerGuess = input;
  }

  returnCard(id, question, answer, correctAnswer){
    this.card = new Card(id, question, answer, correctAnswer);
  }

  evaluateGuess(){
      if(this.playerGuess === this.card.correctAnswer){
      return this.giveFeedback(true)
    } else {
      return this.giveFeedback(false)
    }
  }

  giveFeedback(answer){
    if(answer){
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}

module.exports = Turn;