const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

const card1 = new Card( 1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
const card2 = new Card( 2, 'What is a comma-separated list of related values?', ["array", "object", "function"], "array");
const card3 = new Card( 3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], "mutator method");


const testDeck = [card1, card2, card3];

describe('Round', function() {

  it('should be a function', function() {

    const deck = new Deck(testDeck);

    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {

    const deck = new Deck(testDeck);

    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should instantiate with a Deck', function() {

    const deck = new Deck(testDeck);
    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  }); 

  it('should instantiate with a current Card', function() {

    const deck = new Deck(testDeck);
    const round = new Round(deck);
    
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });
  
  it('should have a function to take turns', function() {

    const deck = new Deck(testDeck);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(card1);
    expect(round.turns).to.equal(0);    
    round.takeTurn();
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.deep.equal(card2)
  });

});