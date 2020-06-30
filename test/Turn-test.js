const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  var Turn;
  beforeEach(function() {
    Turn = new Turn();
  })
});

it.skip('should be a function', function() {
  expect(Turn).to.be.a('function');
});