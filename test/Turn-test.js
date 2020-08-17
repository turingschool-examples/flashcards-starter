const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn;
  beforeEach(() => {
    turn = new Turn('object');
  });
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 
  
  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('object')
  })
});