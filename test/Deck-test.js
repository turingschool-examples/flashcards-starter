let chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', function() {
  let card;
  let deck;
  beforeEach((done) => {
    card = new Card(prototypeQuestions[0])
    deck = new Deck([card]);
    done();
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should count the deck', function() {
    expect(deck.countCards()).to.equal(1);
  });  
});