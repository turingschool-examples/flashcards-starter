const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function () {

  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round class', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should record the player\'s guesses', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const turn = new Turn(card, 'capybara');
    const round = new Round(deck, turn);

    expect(round.playerGuess).to.equal('capybara');
  });

  it('should be able to show you all the cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn(card1, 'pug');
    const round = new Round(deck, turn);

    expect(round.deck).to.eql([card1, card2, card3]);
  });

  it('should be able to return the current card from the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn(card1, 'pug');
    const round = new Round(deck, turn);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should increment the number of turns taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn(card1, 'pug');
    const round = new Round(deck, turn);

    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should update the current card as turns are taken', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn(card1, 'pug');
    const round = new Round(deck, turn);

    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card3);
    expect(round.turns).to.equal(2);
  });

  //takeTurn() begins here

  it('should update the turns count when takeTurn is invoked', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn(card1, 'pug');
    const round = new Round(deck, turn);

    expect(round.turns).to.equal(1);
  });

  it.skip('should evaluate the guess when takeTurn is invoked', function () {
    expect((turn.guess == card.correctAnswer)).to.equal(false);
  });

  it.skip('should give feedback when takeTurn is invoked', function () {

  });

  it.skip('should store ids of incorrect guesses when TakeTurn is invoked', function () {

  });

  it.skip('should make the next card become the current card, when takeTurn is invoked', function() {

  });

  it.skip('should record the player\'s guess when takeTurn is invoked', function() {

  });

  //calculatePercentCorrect() begins here

  it.skip('should calculate and return the percentage of correct guesses', function () {

  });

  //endRound() begins here, unless there's nothing to test!

  it.skip('should print messages to the console', function () {
    //delete if this is just a console.log, per Robbie
  });

});