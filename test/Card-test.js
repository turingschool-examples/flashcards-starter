const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {
    let card;
    beforeEach(() => {
        card = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
    })

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const card = new Card();
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
    expect(card.question).to.equal('What author invented the detective story?');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
    expect(card.answers).to.deep.equal(['Dickens', 'Doyle', 'Gaboriau']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
    expect(card.correctAnswer).to.equal('Poe');
  });
});
