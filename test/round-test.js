const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round');
const Turn = require('../src/turn.js');

describe('Round', function() {
  let card1, card2, card3, deck1, deck2, round;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2]);
    round = new Round(deck1);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should know which deck you are working with', function() {
    const round2 = new Round(deck2);
    expect(round.deck.cards).to.eql([card1, card2, card3]);
    expect(round2.deck.cards).to.eql([card1, card2]);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('sea otter');
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should keep track of turns', function() {
    expect(round.takeTurn('sea otter')).to.eql('YAAS');
  });

  describe('check guess', function() {

    it('should store incorrect guesses', function() {
      round.takeTurn('pug');
      expect(round.incorrectGuess).to.deep.equal(['pug']);
    });

    it('should store correct guesses', function () {
      round.takeTurn();
      round.takeTurn('gallbladder');
      expect(round.correctGuess).to.deep.equal(['gallbladder']);
    });

    it('should give proper feedback', function() {
      const turn = new Turn('spleen', card2);
      round.takeTurn('spleen');
      expect(turn.giveFeedback()).to.equal('FAIL');
    });
  });

  describe('check calculatePercentCorrect', function() {

    it('should calculate percent correct on 2 turns', function() {
      round.takeTurn('spleen');
      round.takeTurn('gallbladder');
      expect(round.calculatePercentCorrect()).to.equal(50);
    });

    it('should calculate percent correct on 3 turns', function() {
      round.takeTurn('spleen');
      round.takeTurn('gallbladder');
      round.takeTurn('appendix');
      expect(round.calculatePercentCorrect()).to.equal(33);
    });
  });
});
