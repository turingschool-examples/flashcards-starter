const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Round', () => {

  let round;

  beforeEach(() => {
    card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
    round = new Round(card);
    });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

})
