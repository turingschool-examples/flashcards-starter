const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  
  it.skip('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it.skip('should instantiate a new deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it.skip('should be initialized with an array of cards', function() {
    const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
    const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
    const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it.skip('should know how many cards it has', function() {
    const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
    const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
    const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cardCount).to.equal(3);
  });
});