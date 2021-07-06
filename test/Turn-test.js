const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');

    const turn2 = new Turn('array');
    expect(turn2.guess).to.equal('array');
  });  

  //wording/ mythicals?
  // it('should be able to store a different guess value', function() {
  //   const turn = new Turn('object');
  //   expect(turn.guess).to.equal('object');

  //   const turn2 = new Turn('array');
  //   expect(turn2.guess).to.equal('array');
  // });  

  it('should store a card', () => {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");

    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });
});
