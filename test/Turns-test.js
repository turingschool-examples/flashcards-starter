const chai = require('chai');
const expect = chai.expect;

// const Turn = require('../src/Turns');

describe('Turn', function() {

  beforeEach(() => {
    const turn = new Turn();
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('test should make sure the guess was returned', () => {
    
  });  

  it('test should make sure a card was returned', () => {
    
  });  

  it('should return true if guess is equal to cards correct answer', () => {
    
  });

  it('should return false is guess is not equal to cards correct answer', () => {
    
  });

  it('should say correct if guess was correct', () => {
    
  });

  it('should say incorrect if guess was incorrect', () => {
    
  });

});