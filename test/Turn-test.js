const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  // beforeEach(function() {
  //   const card = new Card(6, "What is an example of a mutator method?");
  //   const turn = new Turn();
  // })

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function')
  });
  it('should pass two parameters representing question and Card object', function() {
    const card = new Card(6, "What is an example of a mutator method?")
    const turn = new Turn("sort()", card)

    expect(turn.guess).to.equal("sort()")
    expect(turn.card).to.be.a('object')
    expect(turn.card.id).to.equal(6)
  })
});
