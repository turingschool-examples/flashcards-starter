const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn)
})

it('should store a guess', function() {
    const turn = new Turn('panda', card)
    expect(turn.guess).to.equal('panda')
    })
it('should be able to return a guess', function() {
    const turn = new Turn('mint-chip', card)
    expect(turn.returnGuess()).to.equal('mint-chip')

})
})