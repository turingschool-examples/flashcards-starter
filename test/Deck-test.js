const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to take an array of cards', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    expect(deck).to.have.property('cards').with.lengthOf(3);
  });

  it('should be able to know the amount of cards in the deck', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});
