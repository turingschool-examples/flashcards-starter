const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.a.instanceof(Deck);
  })

  it('should be able to count the amount of cards being passed in', function() {
    const card1 = new Card(1, "What is?", ["yes","no", "okay"], "yes");
    const card2 = new Card(2, "What isnt?", ["yes","no", "okay"], "no");
    const card3 = new Card(3, "What would?", ["yes","no", "okay"], "okay");
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })
})
