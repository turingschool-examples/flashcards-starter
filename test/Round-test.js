const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1
  let card2
  let card3
  let deck
  let round
  let turn

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return first card in deck', function() {
    expect(round.returnCurrentCard().id).to.equal(1)
  })

  it('should be able to store incorrect guesses', function() {
  	expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should return a response for the correct guess', function() {
  	expect(round.takeTurn('sea otter')).to.equal('correct!')
  })

  it('should return a response for the incorrect guess', function() {
  	expect(round.takeTurn('spleen')).to.equal('incorrect!')
  })

  it('should be able to count turns', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn('sea otter');
    round.takeTurn('sea otter');
  	expect(round.turns).to.equal(2);
  })

  it('should be able to count incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('capybara');
    round.takeTurn('pug');
  	expect(round.incorrectGuesses.length).to.equal(2);
  })

  it('should return the users current card', function() {
    round.takeTurn('capybara');
    round.takeTurn('pug');
  	expect(round.currentCard()).to.equal(card3);
  })

  it('should return the users percent of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('capybara');
  	expect(round.calculatePercentCorrect()).to.equal(50);
  })


}); //end of test

