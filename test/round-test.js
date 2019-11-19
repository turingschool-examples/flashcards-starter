const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Round = require('../src/round');

describe('Round', function() {

  it('should be a function', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

});
