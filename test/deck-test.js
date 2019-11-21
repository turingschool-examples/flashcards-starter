const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {
  let card1, card2, card3, deck1, deck2;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should know how many cards are in the deck', function() {
    expect(deck1.countCards()).to.equal(3);
    expect(deck2.countCards()).to.equal(2);
  });

});
