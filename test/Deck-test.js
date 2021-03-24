const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const testingData = require('../test/TestingData');

describe('Deck', () => {
  let card1, card2, card3;
  let deck;

  beforeEach( () => {
    card1 = new Card(testingData[0].id, testingData[0].question, testingData[0].answers, testingData[0].correctAnswer);
    card2 = new Card(testingData[1].id, testingData[1].question, testingData[1].answers, testingData[1].correctAnswer);
    card3 = new Card(testingData[2].id, testingData[2].question, testingData[2].answers, testingData[2].correctAnswer);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should hold an array of cards', () => {
    expect(deck.cardDeck).to.deep.equal([card1, card2, card3]);
  });

  it('should return the length of the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });

});