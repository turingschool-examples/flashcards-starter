const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should take in a guess', function() {
    let firstTurn = new Turn('pig')
    expect(firstTurn.guess).to.equal('pig')
  })
})
