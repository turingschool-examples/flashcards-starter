const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Data = require('../src/Data');
const Round = require('../src/Round');


describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should be instantiated with a Deck', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck)
  });

  it('should return current card being played', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });

  it('turns should start at 0', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0)
  })

  it.skip('should make a new Turn instance', () => {
    const deck = new Deck(Data.prototypeData);
    const round = new Round(deck);

  });

  it.skip('should update Turn count', () => {

  });

  it.skip('should make next card in deck the current card', () => {

  });

  it.skip('should evaluate guess, incorrect guess ID is stored', () => {
    //Turn class give true or false
  });

  it.skip('should return feedback of correct or incorrect', () => {
    //Turn class does this
  });

});