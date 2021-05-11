const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Data = require('../src/data');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', () => {
    const turn = new Turn("guess");
    expect(turn.guess).to.equal('guess');
  });

  it('should store a card object', () => {
    
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("guess", card);
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', () => {
    const card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi')
    const turn = new Turn("guess", card);

    const guess = turn.returnGuess();
    expect(guess).to.equal("guess");
  });
//   it('should store a question', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
//   });  

//   it('should store a list of possible answers', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.answers).to.deep.equal(['object', 'array', 'function']);
//   });  

//   it('should store the correct answer', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.correctAnswer).to.equal('object');
//   });
});