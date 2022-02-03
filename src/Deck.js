const Card = require('../src/Card');

let card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2')
let card2 = new Card(2, 'What is 2 + 2 ?', ['2', '3', '4'], '4')

class Deck {
  constructor() {
    this.cards = [card,card2]
  }
}



module.exports = Deck;
