const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck');

describe('createDeck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  
});