const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  });
  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });
  it('should be an instances of Round', function() {

    expect(round).to.be.an.instanceof(Round);
  });
  it('should update the turns', function() {

    expect(round.turns).to.equal(0);

    let guess1 = round.takeTurn('sea otter')
    let guess2 = round.takeTurn('pug');
    let guess3 = round.takeTurn('capybara');

    expect(round.turns).to.equal(3);
  });
  it('should evaluate if the guess is correct or incorrect ', function() {
    let guess1 = round.takeTurn('sea otter')
    let guess2 = round.takeTurn('pug');

    expect(guess1).to.equal('correct');
    expect(guess2).to.equal('incorrect');
  });
  it('should store incorrect and correct guesses', function() {

    let guess1 = round.takeTurn('sea otter')
    expect(round.correctGuesses).to.deep.equal([1]);

    let guess2 = round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });
  it('should update current card after every turn', function() {
    expect(round.currentCard).to.deep.equal(card1);

    round.takeTurn('gallbladder')
    expect(round.currentCard).to.deep.equal(card2);

    round.takeTurn('Fitzgerald');
    expect(round.currentCard).to.deep.equal(card3);
  });
  it('should returns the percentage of correct guesses', function() {

    let guess1 = round.takeTurn('pug');

    expect(round.calculatePercentCorrect()).to.equal(0);

    let guess2 = round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(0.5);
  });
  it.skip('should', function() {

    let guess1 = round.takeTurn('sea otter')
    let guess2 = round.takeTurn('pug');
    let guess3 = round.takeTurn('capybara');
    round.endRound()

    expect(round.endRound()).to.equal(1);
  });
});
