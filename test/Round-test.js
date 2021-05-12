
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


  });

  it('should end the round', function() {

    ('** Round over! ** You answered % of the questions correctly!')
  });

});



// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
