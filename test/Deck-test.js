const chai = require('chai');
const expect = chai.expect;

const Card = ('../src/Card');
const Deck = ('../src/Deck');

describe('Deck', function() {

  beforeEach(function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  });

  beforeEach(function() {
    const deck = new Deck([card1, card2, card3]);
  });

  // it.skip('should be a function', function() {
  //   expect(Deck).to.be.a('function');
  // });
  //
  // it.skip('should store array of cards', function() {
  //   expect(deck.cards).to.deep.equal([card1, card2, card3]);
  // });
})
