const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have a property of cards', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card1]);
    expect(deck.cards).to.deep.equal([card1]); 
  });

  it('should return the number of cards in the deck', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is Brady\'s favorite activity?', ['biking','snowboarding','hiking','camping'], 'snowboarding');
    const card3 = new Card(3, 'What is Brady\'s favorite food?', ['pizza','biscuits n gravy','stir fry','pulled pork'], 'biscuits n gravy');
    const card4 = new Card(4,'What is my hometown?',['Rochester, NY','Rochester, MN','Devner, CO','Long Beach, CA'], 'Rochester, MN');
    const deck1 = new Deck([card1, card2]);
    const deck2 = new Deck([card1, card2, card3, card4]);
    expect(deck1.countCards()).to.equal(2);
    expect(deck2.countCards()).to.equal(4);

  }); 
});