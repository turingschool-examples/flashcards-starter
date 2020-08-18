const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  let round;
  beforeEach(() => {
    round = new Round();
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 
});