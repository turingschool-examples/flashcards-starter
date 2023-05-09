const chai = require('chai');
const expect = chai.expect;

const { takeTurn } = require('../src/turn');

describe('turn', function() {
  it.skip('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });
});