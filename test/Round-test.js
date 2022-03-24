const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn')




describe('Round', function() {

  beforeEach(() => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });

  it('should be an instance of Round',function () {
    expect(round).to.be.an.instanceof(Round);
  });
  it('should have a deck', function() {
    expect(round.deck.cards).to.equal(cards)
  });


  it('should be able to return current card by default', function() {
    expect(round.returnCurrentCard()).to.deep.equal(cards[0]);
  });

  it('should start with zero turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', function () {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should be able to track rounds total', () => {
    round.takeTurn('sea otter')
    round.takeTurn('pug')

    expect(round.turns).to.equal(2);
  });

  it('should evaluate if a user guess is correct', () => {
    round.takeTurn('sea otter');

    expect(round.currentTurn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate if a user guess is incorrect', () => {
    round.takeTurn('capybara')
    expect(round.currentTurn.evaluateGuess()).to.equal(false);
  });

  it('should give user feedback if they guess correctly', () => {
    round.takeTurn('sea otter')

    expect(round.currentTurn.giveFeedBack()).to.equal('correct!');
  });

  it('should give user feedback if they guess incorrectly', () => {
    round.takeTurn('capybara')

    expect(round.currentTurn.giveFeedBack()).to.equal('incorrect!')
  });

  it('should be able to store incorrect guesses', () => {
    round.takeTurn('pug')

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should be able to calculate the percentage of correct answers', () => {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.calculatePercentCorrect()).to.equal(.50);
  });

  it('should be able to end round', () => {

    round.takeTurn('sea otter');
    round.takeTurn('spleen')

    expect(round.endRound()).to.equal('** You answered 50% of the questions correctly!')
  })




});
