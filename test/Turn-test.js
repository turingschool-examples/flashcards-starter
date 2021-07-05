const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turn.js');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

});
