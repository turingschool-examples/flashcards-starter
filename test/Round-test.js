const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {

  let card1, card2, card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should instantiate the Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });
  
  it('should have a deck of cards', () => {
    expect(round.deck.cards).to.be.a('array');
    expect(round.deck.cards).to.have.lengthOf(3);
  });

  it('should have the current card be the first card', () => {
    let currentCard = round.returnCurrentCard();
    expect(currentCard).to.equal(card1);
  });

  it('should start with no turns', () => {
    expect(round.turns).to.deep.equal(0);
  });

  it('should incrament the turns by 1 every time a turn is taken', () => {
    round.addTurn();
    expect(round.turns).to.deep.equal(1);
    
    round.addTurn();
    round.addTurn();
    round.addTurn();
    expect(round.turns).to.deep.equal(4);
  });

  it('should add correct guesses to the correct guesses array by id', () => {
    round.takeTurn('object');
    expect(round.correctGuesses).to.deep.equal([1]);
    expect(round.correctGuesses[0]).to.equal(1);

    round.takeTurn('array');
    expect(round.correctGuesses).to.deep.equal([1, 2]);
    expect(round.correctGuesses[1]).to.equal(2);
  });

  it('should add incorrect guesses to the incorrect guesses array by id', () => {
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    expect(round.incorrectGuesses[0]).to.equal(1);

    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([1, 2]);
    expect(round.incorrectGuesses[1]).to.equal(2);
  });

  it('should update the current card to the next card in the cards array', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    expect(round.currentCard).to.deep.equal(card2);
  });

  it('should show feedback if the answer is correct', () => {
    expect(round.takeTurn('object')).to.equal('Correct!');
  });

  it('should show feedback if the answer is inncorrect', () => {
    expect(round.takeTurn('array')).to.equal('Incorrect! The correct answer is object.');
  });

  it('should calculate the total correct answers out of the whole', () => {
    expect(round.calculatePercentCorrect()).to.equal('no questions answered.');
    round.takeTurn('object');
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal('100%');
    
    round.takeTurn('wrong answer');
    expect(round.calculatePercentCorrect()).to.equal('67%');
  });

  it(`should show when the round is ended when all cards have been played`, () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('wrong answer')

    const total = round.calculatePercentCorrect();
    const endRound = round.endRound()
    expect(endRound).to.equal(`** Round over! ** You answered ${total} of the questions correctly!`);
  });
});