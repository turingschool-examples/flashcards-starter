const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');

describe('Turn', function() {
  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
});
