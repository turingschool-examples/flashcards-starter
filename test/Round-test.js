const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach( function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });
  it('should take a deck as a parameter', function() {
    expect(round.deck).to.eql(deck);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.eql(card1);
  });

  it('should update the turns after the player takes a turn', function() {
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
  });

  it('should create a new turn instance when the player takes a turn and return feddback', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should after taking a turn the next card becomes the current card', function() {
    expect(round.returnCurrentCard()).to.eql(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.eql(card2);
  });

  it('should update incorrectGuesses when the player guesses incorrectly', function() {
    expect(round.incorrectGuesses).to.eql([]);
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.eql([14]);
  });
});
