const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Round', function() {
  let deck, round, card1, card2, card3;
  
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1,card2,card3])
    round = new Round(deck)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('shuld instantiate a new Round', function() {
    expect(round).to.be.an.instanceOf(Round)
  })

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  });
  
  it('should create a new turn', function() {
    round.takeTurn('my guess');
    expect(round.turn).to.equal(1)
  });

  it('should replace the new current card with the next card', function() {
    round.takeTurn('my guess');
    expect(round.deck.cards[0]).to.equal(card2)
  });

  it('should store incorrect guesses in an array', function() {
    round.takeTurn('my guess');
    expect(round.incorrectGuesses[0]).to.equal(1)
    round.takeTurn('my second guess')
    expect(round.incorrectGuesses.length).to.equal(2)
  });
  
  it('should return guess feedback each time', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('my guess')).to.equal('incorrect!')
  });

  it('should have a function that returns the percentage of correct guesses', function() {
    round.takeTurn('sea otter')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('my guess')
    expect(round.calculatePercentCorrect()).to.equal(50)
  });
});