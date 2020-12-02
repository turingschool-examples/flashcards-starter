const chai = require('chai');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const expect = chai.expect;

describe('Deck', function() {

  beforeEach(function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
  });

  it('should intialize our deck with an array of card instances', function() {
    const card1 = new Card(1, 'What is Joe\'s favorite food', ['pizza', 'burgers', 'noodles'], 'noodles');
    const card2 = new Card(2, 'What is Joe\'s favorite animal', ['dog', 'cat', 'frog'], 'cat');
    const card3 = new Card(3, 'What is Joe\'s favorite color', ['blue', 'red', 'yellow'], 'blue');

    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });
  
})