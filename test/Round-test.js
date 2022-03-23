const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should pass through a deck to be played', function() {
    expect(round.deck).to.be.an.instanceof(Deck);
    expect(round.deck).to.equal(deck);
  });

  it('should have a method that returns the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should start off with zero turns and incorrect guesses', function() {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to take a turn to evaluate a guess', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.takeTurn('spleen')).to.equal('incorrect!');
  });

  it('should increment the turns count after a turn is taken', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.turns).to.equal(2);
  });

  it('should keep track of incorrect guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should move to the next card after a guess is made', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should be able to calculate the percent correct', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  });

  it('should be able to end a round', function() {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('playing with bubble wrap');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
  });
});
