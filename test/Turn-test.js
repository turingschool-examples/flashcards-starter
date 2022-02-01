// file dependencies 
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

// global testing variables
const card = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);
const turn = new Turn('object', card);

//  tests
it('should instantiate Turn as a class', () => {
  expect(turn).to.be.an.instanceof(Turn)
});

it('should have a method called \'returnCard\'', () => {
  expect(turn.returnCard).to.be.a('function')
})
