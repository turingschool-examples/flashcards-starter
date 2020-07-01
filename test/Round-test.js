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
  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(30, 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?', ['prototype method', 'object', 'callback function'], 'prototype method');
    card3 = new Card(15, 'The callback function for reduce() takes in an accumulator and a current element.', ['true', 'false'], 'true');
    deck = new Deck([card1, card2, card3]);
  });

});

