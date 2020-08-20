const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });
  it('should be initialized with an array of cards',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards.length).to.equal(3);
  });

  it('should count cards',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    deck.countCards();

    expect(deck.countCards()).to.equal(3);
  });
});
