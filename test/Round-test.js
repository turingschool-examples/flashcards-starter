const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Round', function() {

  let deck, round, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter',
      'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix',
      'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card in the deck', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
  });

  it('should update turns count', function() {
    round.takeTurn('gallbladder');
    round.takeTurn('pug');
    expect(round.turns).to.equal(2);
  });

  it('should evaluate the guess', function() {
    round.takeTurn('gallbladder');
    round.takeTurn('sea otter');
    expect(round.takeTurn('sea otter')).to.equal('incorrect!');
  });

  it('should update current card with the next card in the deck', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.deep.equal({
      id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble'
      + ' wrap'],
      correctAnswer: 'playing with bubble wrap'
    });
  });

  it('should store the current card id if the guess is incorrect', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should return the percentage of correct guesses', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.deep.equal('67');
  });

  it('should return a message communicating the end of the round', function() {
    round.takeTurn('sea otter');
    round.calculatePercentCorrect();
    round.endRound();
    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 100%'
    + ' of the questions correctly!');
  });

});
