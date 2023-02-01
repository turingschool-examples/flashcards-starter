const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

it('should be a function', () => {
  expect(Round).to.be.a('function');
});

it('should be an instance of Round', () => {
  const round = new Round;
  
  expect(round).to.be.an.instanceOf(Round);
});