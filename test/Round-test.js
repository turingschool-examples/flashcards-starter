const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', () => {
  let card1, card2, card3, deck1, round;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck1 = new Deck([card1, card2, card3]);
    round = new Round(deck1);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store deck as an object', () => {
    expect(round.deck).to.be.a('object');
  });

  it('should default the first card in the deck to be the current card', () => {
    expect(round.currentCard).to.equal(card1)
    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard)
  });

  it('should take a turn', () => {
    const turn1 = round.takeTurn('object')
    expect(round.turns).to.equal(1)
  });

  it('should evaluate guesses and give feedback', () => {
    expect(round.takeTurn('object')).to.equal('You are correct!')
  });

  it('should store incorrect guesses', () => {
    const turn1 = round.takeTurn('object');
    const turn2 = round.takeTurn('function');

    expect(round.incorrectGuesses).to.have.lengthOf(1);
    expect(round.incorrectGuesses[0]).to.be.a("number");
    expect(round.incorrectGuesses[0]).to.equal(2);
  });

  it('should calculate and return the percentage of correct guesses', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('accesor method')
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(67);

  })



})
