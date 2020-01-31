const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
  it('should be a function', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });

  it('should be able to store a different question', function() {
    const card = new Card(2, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    expect(card.question).to.equal('Which is of these is a reserved word in Javascript?');
  })

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });

  it('should be able to store different answers', function() {
    const card = new Card(3, 'Which of these is NOT a reserved word in Javascript?', ['if', 'same', 'false'], 'same');
    expect(card.answers).to.deep.equal(['if', 'same', 'false']);
  });

  it('should be able to store different answers', function() {
    const card = new Card(2, 'Which is NOT a keyword you can use to declare a variable in Javascript?', ['var', 'let', 'variable', 'const'], 'variable');
    expect(card.answers).to.deep.equal(['var', 'let', 'variable', 'const']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    expect(card.correctAnswer).to.equal('object');
  });

  it('should be able to store a different correct answer', function() {
    const card = new Card(4, 'A locally scoped variable is accessible to all function within the file.', ['true', 'false'], 'false');
    expect(card.correctAnswer).to.equal('false');
  });

  it('should have an id', function () {
    const card = new Card(1, 'What is a function defined on an object called?', ['parameter', 'method', 'property'], 'method');
    expect(card.id).to.equal(1);
  });

  it('should be able to have a different id', function() {
    const card = new Card(2, 'What is NOT true of the return keyword?', ['it end the function after it is run', 'it can hold onto a value from the function', 'it always comes back as undefined'], 'it always comes back as undefined');
    expect(card.id).to.equal(2);
  });

});
