const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

const testData = data.prototypeData.slice(0,5);

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of a Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should hold an array of cards', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const deck = new Deck([card1, card2, card3]);

    expect(deck.currentCards).to.deep.equal([card1, card2, card3]);
  });

  it('should count total cards', function() {
    const card1 = new Card(testData[0].id, testData[0].question, testData[0].answers, testData[0].correctAnswer);
    const card2 = new Card(testData[1].id, testData[1].question, testData[1].answers, testData[1].correctAnswer);
    const card3 = new Card(testData[2].id, testData[2].question, testData[2].answers, testData[2].correctAnswer);
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });
});
