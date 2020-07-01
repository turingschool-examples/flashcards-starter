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
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should have a currentCard that is the first Card in the Deck', function() {
    console.log(deck, this.currentCard);
    expect(this.currentCard).to.equal(deck[0]);
  });

});

