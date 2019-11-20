const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round');
const Turn = require('../src/turn.js');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should know which deck you are working with', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck1 = new Deck([card1, card2, card3]);
    const deck2 = new Deck([card1, card2]);
    const round1 = new Round(deck1);
    const round2 = new Round(deck2);
    expect(round1.deck).to.equal(deck1);
    expect(round2.deck).to.equal(deck2);
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck1 = new Deck([card1, card2, card3]);
    const deck2 = new Deck([card1, card2]);
    const round1 = new Round(deck1);
    const round2 = new Round(deck2);
    expect(round1.returnCurrentCard()).to.equal(card1);
    expect(round2.returnCurrentCard()).to.equal(card1);
  });

  it('should keep track of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const turn = new Turn('sea otter', card1)
    const round = new Round(deck, turn);
    expect(round.takeTurn(turn)).to.equal(1);
    expect(round.takeTurn(turn)).to.equal(2);
    expect(round.takeTurn(turn)).to.equal(3);
  });

  it('should store incorrect answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const turn1 = new Turn('pug', card1)
    const turn2 = new Turn('capybera', card1);
    const turn3 = new Turn('sea otter', card1);
    const round = new Round(deck, turn1);
    round.takeTurn(turn1);
    expect(round.incorrectGuess).to.deep.equal(['pug']);
    expect(turn1.giveFeedback()).to.deep.equal('FAIL');
    round.takeTurn(turn2);
    expect(round.incorrectGuess).to.deep.equal(['pug', 'capybera']);
    expect(turn2.giveFeedback()).to.deep.equal('FAIL');
    round.takeTurn(turn3);
    expect(round.incorrectGuess).to.deep.equal(['pug', 'capybera']);
    expect(turn3.giveFeedback()).to.deep.equal('YAAS QUEEN');
  });


});
