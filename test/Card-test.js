const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  beforeEach(function() {
    let card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
  });

  it('should be a function', function() {
    const card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    // const card = new Card();
    const card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });
});