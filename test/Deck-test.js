const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

it('should be a function', function() {
  const deck = new Deck();
  expect(Deck).to.be.a('function');
})
})
