const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function () {
  let card1, card2, card3, deck, round;
  beforeEach( function() {
    card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });


  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate an object', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start at turn 0', function () {
    expect(round.turns).to.be.equal(0);
  });

  it('should have a deck of cards', function () {
    expect(round.deck).to.be.instanceof(Deck);
  });

  it('should have the first card in the deck be the first', function () {
    expect(round.deck.cards[0]).to.be.equal(card1);
  });

  it('should be able to take a turn', function () {
    round.takeTurn('Example Guess');
    expect(round.turns).to.equal(1);
  });

  it('should tell user if they got it right', function () {

  });

  it('should tell use if they got it wrong', function () {

  });

  it('should record failed questions', function () {

  });

  it('should increment the turns counter', function () {

  });

  it('should be able to return the current card', function () {

  });

  it('should start with an empty array of incorrect guesses', function () {

  });

  it('should be able to calculate % correct', function () {

  });

  it('should print a message when the round is over', function () {

  });
});
