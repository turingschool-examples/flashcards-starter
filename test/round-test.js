const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round');
const Turn = require('../src/turn.js');

describe('Round', function() {
    let card1, card2, card3, deck1, deck2;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2]);
  })

  it('should be a function', function() {
    const round = new Round(deck1);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round(deck1);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should know which deck you are working with', function() {
    const round1 = new Round(deck1);
    const round2 = new Round(deck2);
    expect(round1.deck).to.eql([card1, card2, card3]);
    expect(round2.deck).to.eql([card1, card2]);
  });

  it('should return the current card', function() {
    // const turn = new Turn('sea otter', card1);
    const round1 = new Round(deck1);
    const round2 = new Round(deck1);
    expect(round1.returnCurrentCard()).to.equal(card1);
    round1.takeTurn('sea otter');
    expect(round2.returnCurrentCard()).to.equal(card2);
  });

  it('should keep track of turns', function() {
    // const turn = new Turn('sea otter', card1)
    const round = new Round(deck1 );
    expect(round.takeTurn('sea otter')).to.equal(1);
    // expect(round.takeTurn(turn)).to.equal(2);
    // expect(round.takeTurn(turn)).to.equal(3);
  });

  it('should store incorrect guesses', function() {
    // const turn = new Turn('pug', card1)
    // const turn2 = new Turn('capybera', card1);
    // const turn3 = new Turn('sea otter', card1);
    const round = new Round(deck1);
    round.takeTurn('pug');
    expect(round.incorrectGuess).to.deep.equal(['pug']);
    // expect(turn1.giveFeedback()).to.deep.equal('FAIL');
    // round.takeTurn('capybera');
    // expect(round.incorrectGuess).to.deep.equal(['pug', 'capybera']);
    // expect(turn2.giveFeedback()).to.deep.equal('FAIL');
    // round.takeTurn('sea otter');
    // expect(round.incorrectGuess).to.deep.equal(['pug', 'capybera']);
    // expect(round.correctGuess).to.deep.equal(['sea otter'])
    // expect(turn3.giveFeedback()).to.deep.equal('YAAS QUEEN');
  });

  it('should give proper feedback', function() {
    // const turn1 = new Turn('spleen', card2);
    // const turn2 = new Turn('appendix', card2);
    // const turn3 = new Turn('gallbladder', card2);
    const round = new Round(deck1);
    expect(round.takeTurn('spleen')).to.equal('FAIL')
    // expect(round.incorrectGuess).to.deep.equal(['spleen']);
    // expect(turn1.giveFeedback()).to.deep.equal('FAIL');
    // round.takeTurn(turn2);
    // expect(round.incorrectGuess).to.equal(['spleen', 'appendix']);
    // expect(turn2.giveFeedback()).to.deep.equal('FAIL');
    // round.takeTurn(turn3);
    // expect(round.incorrectGuess).to.equal(['spleen', 'appendix']);
    // expect(turn3.giveFeedback()).to.deep.equal('YAAS QUEEN');
  });

  it('should store correct guesses', function() {
    // const turn1 = new Turn('spleen', card2)
    // const turn2 = new Turn('appendix', card2);
    // const turn = new Turn('gallbladder', card2);
    const round = new Round(deck1);
    // round.takeTurn(turn1);
    // expect(round.correctGuess).to.deep.equal([]);
    // round.takeTurn('appendix');
    // expect(round.correctGuess).to.deep.equal([]);
    round.takeTurn('gallbladder');
    expect(round.correctGuess).to.deep.equal(['gallbladder']);
  });

  it('should calculate percent correct', function() {
    // const turn1 = new Turn('spleen', card2)
    // const turn2 = new Turn('gallbladder', card2);
    // const turn3 = new Turn('appendix', card2);
    const round = new Round(deck1);
    round.takeTurn('spleen');
    round.takeTurn('gallbladder');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('appendix');
    expect(round.calculatePercentCorrect()).to.equal(33);
  });



});
