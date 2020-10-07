const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  it('should be a function', () => {
    const card = new Card();

    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    const card = new Card();

    expect(card).to.be.an.instanceof(Card);
  });

  it('should take an id for the first argument', () => {
    const card = new Card(1);

    expect(card.id).to.equal(1);
  });

  it('should only take a postive integer for the id', () => {
    const card = new Card(1);

    expect(card.id).to.be.above(0);
  });

  it('should store a question', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?')

    expect(card.question).to.equal('What is Harry Potter\'s patronus?');
  });

  it('should only take a string for the question', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?')

    expect(card.question).to.be.a('string');
  });

it('should store a list of possible answers', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag']);

    expect(card.answers).to.deep.equal(['horse', 'otter', 'stag']);
  });

  it('should only take an array for the list of possible answers', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag']);

    expect(card.answers).to.be.an('array');
  });

  it('should store the correct answer', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');

    expect(card.correctAnswer).to.equal('stag');
  });

  it('should only take a string for the correct answer', () => {
    const card = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');

    expect(card.correctAnswer).to.be.a('string');
  })
});
