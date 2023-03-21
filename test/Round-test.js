const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round')

let round;

describe('round', () => {
  
  beforeEach(() => round = new Round());

  it.skip('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of round', () => {
    expect(round).to.be.instanceof(Round);
  });

  it.skip('should return current card', () => {

  });
}) 