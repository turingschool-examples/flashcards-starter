const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDecl } = require('../src/deck');

describe('deck', () => {
  it('should create a deck of cards', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    expect(deck.length).to.equal(3);
  });
  it('should work with different size decks', () => {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = createDeck([card1]);
    expect(deck.length).to.equal(1);
  });
})