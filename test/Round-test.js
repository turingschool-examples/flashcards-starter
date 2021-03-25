const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have an array of incorrect guesses', function() {
    const round = new Round();
    expect(round).to.have.property('incorrectGuesses');
    expect(round.incorrectGuesses).to.be.an('array');
  });

  it('should start with 0 turns', function() {
    const round = new Round();
    expect(round).to.have.property('turns');
    expect(round.turns).to.equal(0);
  });

  it('should be able to store the deck', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should be able to return the current card', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('mercury', card1);
    expect(round.returnCurrentCard(turn)).to.be.a('object');
    expect(round.returnCurrentCard(turn)).to.equal(card1);
  });

  it('should be able to start a new turn', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const takeTurn = round.takeTurn('mercury');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard(takeTurn)).to.equal(card2);

  });

  it('should be able to give feedback on correct answer', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const takeTurn = round.takeTurn('mercury');
    expect(takeTurn).to.equal('correct!');
  });

  it('should be able to give feedback on incorrect answer', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn('mars', card1);
    const takeTurn = round.takeTurn('mars');
    expect(takeTurn).to.equal('incorrect!');
    expect(round.incorrectGuesses).to.be.an('array').that.includes(1);
  });

  it('should be able to calculate the percent of correct guesses', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('mercury');
    round.takeTurn('albany');
    round.takeTurn('sirius');
    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should be able to let the player know the round is over', function() {
    const card1 = new Card(1, '1st planet from the sun', ['earth', 'mercury', 'mars'], 'mercury');
    const card2 = new Card(2, 'capital of NY', ['albany', 'syracuse', 'buffalo'], 'albany');
    const card3 = new Card(3, 'north star name', ['polaris', 'sirius', 'rarius'], 'polaris');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('mercury');
    round.takeTurn('albany');
    round.takeTurn('sirius');
    round.endRound();
  });
});
