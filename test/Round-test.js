const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round happy path', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(30, 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?', ['prototype method', 'object', 'callback function'], 'prototype method');
    card3 = new Card(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should initialize a round with a Deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0, 'nooo why fail??');
  });

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should show currentCard, which is the first Card in the Deck', function() {

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should create a new Turn when a guess is made', function() {

  });

});

