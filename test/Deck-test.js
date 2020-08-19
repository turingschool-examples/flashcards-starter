const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1
  let card2
  let card3
  beforeEach(() => {
    let card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter');
    let card2 = new Card(
      14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder');
    let card3 = new Card(
      12,
      'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix',
      'playing with bubble wrap'],
      'playing with bubble wrap');
})

  it('should be a function', () => {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to initialize an array of cards', () => {
    const deck = new Deck([card1, card2, card3]);

    expect(deck.card).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count cards', () => {
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  });

});
