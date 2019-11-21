const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2]);
  });

  it('should be a function', function() {
    const deck = new Deck([card1, card2, card3, card4]);
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // const card4 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1, card2, card3]);
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should know how many cards are in the deck', function() {
    // const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // const card4 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck1 = new Deck([card1, card2, card3]);
    const deck2 = new Deck([card1, card2]);
    expect(deck1.countCards()).to.equal(4);
    expect(deck2.countCards()).to.equal(2);
  });

});
