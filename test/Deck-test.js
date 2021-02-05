const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be initialized with an array of Card objects', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africas legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.be.a('array');
    expect(deck.cards[0].id).to.equal(card1.id)
    expect(deck.cards.length).to.equal(3)
  })

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    const card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    const card3 = new Card(4, 'Where is South Africas legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  })
})