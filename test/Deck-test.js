const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold an array of Card objects', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(3, 'What kind of bear is best?', ['panda bear', 'balck bear', 'that\'s a ridiculous question'], 'black bear');

    const deck = new Deck([card1, card2, card3])
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });
});
