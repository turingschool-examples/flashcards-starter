
const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should take in an argument of deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should store a current card', function() {
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
  });

  it('should have turns set to 0 by default', function() {
    expect(round.turns).to.equal(0);
  });

  it('should store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns count', function() {
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(1);
    round.takeTurn('gallbladder');
    expect(round.turns).to.equal(2);
  });

  it('should update current card with next card', function() {
    round.takeTurn('pug');
    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn('gallbladder');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should store incorrect guesses', function() {
   round.takeTurn('pug');
   expect(round.incorrectGuesses).to.deep.equal([round.deck[0].id]);

   round.takeTurn('appendix');
   expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should return if the guess is correct', function() {
    expect(round.takeTurn('capybara')).to.equal('Your answer of capybara is incorrect!');
  });

  it('should return if the guess is incorrect', function() {
    expect(round.takeTurn('sea otter')).to.equal('Your answer of sea otter is correct!');
  });

  it('should calculate percentage of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music')
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should end the round and give user percent of correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music')
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  });

});
