const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'How tall is William', ['60 inches', '68 inches', '72 inches'], '68 inches');
    const card3 = new Card(3, 'What color are my shoes?', ['red', 'brown', 'blue'], 'blue');
    const cards = [card, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.deep.equal(card);
  });

  it('should be able to takeTurn', function(){
    
  })

})