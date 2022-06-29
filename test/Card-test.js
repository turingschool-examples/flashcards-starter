const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', () => {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('object');
  });
});


// describe('outer describe', function () {
//   beforeEach(function () {
//       console.log('outer describe - beforeEach');
//   });

//   describe('inner describe 1', function () {
//       before(function () {
//           console.log('inner describe 1 - before');
//       });

//   describe('inner describe 2', function () {
//       beforeEach(function () {
//           console.log('inner describe 2 - beforeEach');
//       });
// });

// output will be:
// inner describe 1 - before
// outer describe - beforeEach
// inner describe 2 - beforeEach