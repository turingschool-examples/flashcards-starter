const chai = require('chai');
const expect = chai.expect;


const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', () => {
    expect(Turn).to.be.a('function')
  });

  it('should be an instance os a Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn)
  });

  
})
