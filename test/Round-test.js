const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

const testingData = require('../test/TestingData')

describe('Round', () => {
  let card1, card2, card3, deck, turn, round;

  beforeEach( () => {
    card1 = new Card(testingData[0].id, testingData[0].question, testingData[0].answers, testingData[0].correctAnswer);
    card2 = new Card(testingData[1].id, testingData[1].question, testingData[1].answers, testingData[1].correctAnswer);
    card3 = new Card(testingData[2].id, testingData[2].question, testingData[2].answers, testingData[2].correctAnswer);
    deck = new Deck([card1, card2, card3]);
    turn = new Turn('Gary', card2);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should show the deck of cards', () => {
    expect(round.deck).to.deep.equal(deck.cardDeck)
  });

  it('should start with a turn count of 0', () => {
    expect(round.turns).to.equal(0)
  });

  it('should start with an empty array for incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.turns).to.equal(0);
  });

  it('should increase the number of turns', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should create an instance of a new turn', () => {
    round.takeTurn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should bring up the next card in the deck', () => {
    round.takeTurn();
    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should provide feedback for correct answers', () => {
    round.takeTurn();
    expect(round.takeTurn(testingData[1].correctAnswer)).to.equal('correct!');
  });

  it('should provide feedback for incorrect answers', () => {
    round.takeTurn();
    expect(round.takeTurn(testingData[2].correctAnswer)).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct answers', () => {
    round.takeTurn(testingData[0].correctAnswer);
    round.takeTurn(testingData[1].correctAnswer);
    round.takeTurn(testingData[1].correctAnswer);
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should calculate the percentage if user gets all answers incorrect', () => {
    round.takeTurn(testingData[2].correctAnswer);
    round.takeTurn(testingData[0].correctAnswer);
    round.takeTurn(testingData[1].correctAnswer);
    expect(round.calculatePercentCorrect()).to.equal(0);
  });

  it('should calculate the percentage if user gets all answers correct', () => {
    round.takeTurn(testingData[0].correctAnswer);
    round.takeTurn(testingData[1].correctAnswer);
    round.takeTurn(testingData[2].correctAnswer);
    expect(round.calculatePercentCorrect()).to.equal(100);
  });
  
})