const Card = require('../src/Card');
const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Turn = require('../src/Turn');


describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(() => {
    card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix',
      'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to initialize an array of cards', () => {
    expect(deck.card).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count cards', () => {
    expect(deck.countCards()).to.equal(3);
  });

});
