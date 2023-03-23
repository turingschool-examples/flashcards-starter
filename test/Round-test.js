const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round1;
  let turn1;
  let turn2;
  let turn3;


  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    turn1 = new Turn('for loop', card1);
    turn2 = new Turn('array', card2);
    turn3 = new Turn('mutator method', card3);

    deck = new Deck([card1, card2, card3]);
    round1 = new Round(deck);
  });

  it('should be a function', function() {
    // const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of round', function() {
    // const round = new Round();
    expect(round1).to.be.an.instanceof(Round);
  }); 

  it('should return the current card being played', function() {
    expect(round1.returnCurrentCard()).to.equal(round1.currentCard);
  });

  it('should updates turns count, , gives feedback, and stores ids of incorrect guesses', function() {
    // expect(round1.takeTurn()).to.equal('incorrect!');
    expect(round1.turns).to.equal(0);
  });

  it('should updates turns count every time an user makes a guess', function() {
    round1.takeTurn();
    round1.takeTurn();
    round1.takeTurn();
  
    expect(round1.turns).to.equal(3);    
  });

  it('should store ids of incorrect guesses', function() {
    round1.takeTurn(turn1.guess);
    // round1.takeTurn(turn2.guess);

    expect(round1.incorrectGuess).to.deep.equal([1]);
  });

  it('should give feedback for a wrong answer', function() {
    expect(round1.takeTurn('monkey')).to.equal('incorrect!'); 
  });

  it('should calculate and return the percentage of correct guesses', function() {
    round1.takeTurn(turn1.guess);
    round1.takeTurn(turn2.guess);

    expect(round1.calculatePercentCorrect()).to.equal('50%'); 
  });

  it('should end the round', function() {
    round1.takeTurn(turn1.guess);
    round1.takeTurn(turn2.guess);
    round1.takeTurn(turn3.guess);

    expect(round1.endRound()).to.equal('**Round over!**You answered 67% of the questions correctly!')
  });
  
});