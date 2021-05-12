const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  });
  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });
  it('should be an instances of Round', function() {

    expect(round).to.be.an.instanceof(Round);
  });
  it('should store and return the first card from the deck', function() {

    round.returnCurrentCard();

    expect(round.currentCard).to.equal(card1);
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  });
  it('should evaluate if the guess is correct or incorrect ', function() {
    round.takeTurn('sea otter');

    expect(round.takeTurn()).to.deep.equal('correct');

    round.takeTurn('pug');

    expect(round.takeTurn()).to.deep.equal('incorrect');
  });
});
