const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn();
  });

  it.skip('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

});