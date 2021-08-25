const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('know how many cards are in the Deck', function() {
    const card1 = new Card(13, 'What is Steven\'s favorite snack?', ['flamin\' Hot Cheetos', 'Cheez-Its', 'Gummy Bears', 'Twinkies'], 'Twinkies');
    const card2 = new Card(12, 'What is Nalle\'s middle name?', ['Red-man', 'Naji', 'Walker'], 'Red-man');
    const card3 = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    const deck1 = new Deck([card1, card2]);
    const deck2 = new Deck([card1, card2, card3]);

    expect(deck1.countCards()).to.equal(2);
    expect(deck2.countCards()).to.equal(3);
  });
})
