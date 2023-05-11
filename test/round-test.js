const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck');
const {createRound} = require('../src/round');

describe('rounds', function () {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });
});