const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn;
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
});