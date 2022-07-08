const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Round', function() {

  let deck;
  beforeEach(function() {
    deck = new Deck(data.prototypeData);
  });

  it('should be a function', function() {
    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be a new instance of Round', function() {
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should begin with the current card being the first card in the deck', function() {
    const round = new Round(deck);

    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(data.prototypeData[0]);
  });

  it('should be able to return which card is currently being played', function() {
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(data.prototypeData[0]);
  });

  it('should be able to update the current card to the next card in the deck after a turn is taken', function() {
    const round = new Round(deck);

    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(data.prototypeData[1]);
  });

  it('should return feedback telling the user whether the guess was correct or incorrect', function() {
    const round = new Round(deck);

    expect(round.takeTurn('object')).to.equal('Correct!');
    expect(round.takeTurn('function')).to.equal('Incorrect!');
  })

  it('should be able to store the id\'s of any cards that were incorrectly guessed', function() {
    const round = new Round(deck);

    expect(round.incorrectGuessIds).to.deep.equal([]);

    round.takeTurn('array');
    expect(round.incorrectGuessIds).to.deep.equal([1]);
  })

  it('should be able to update the turn count when a turn is taken', function() {
    const round = new Round(deck);

    round.takeTurn();
    expect(round.turnCount).to.equal(1);

    round.takeTurn();
    expect(round.turnCount).to.equal(2);

    round.takeTurn();
    round.takeTurn();
    expect(round.turnCount).to.equal(4);
  });

  it('should be able to calculate the percent of quesions answered correctly', function() {
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should return a message that shows the percent of questions that were answered correctly', function() {
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');
    expect(round.endRound()).to.equal('**Round over!** You answered 66% of the questions correctly!')
  });

});