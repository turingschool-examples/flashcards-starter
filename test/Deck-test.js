const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should be able to take an array of cards', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.have.property('cards').with.lengthOf(3);
    expect(deck.cards).to.equal([card1, card2, card3]);
  });
});
