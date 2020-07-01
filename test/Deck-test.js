const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck happy path', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(30, 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?', ['prototype method', 'object', 'callback function'], 'prototype method');
    card3 = new Card(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should initialize a deck with an array of Card objects', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many Cards are in the Deck', function() {
    expect(deck.cards.length).to.equal(3);
  });

});