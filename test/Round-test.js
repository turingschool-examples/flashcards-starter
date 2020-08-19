const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it('round should start at the beging of deck', () => {
    const card1 = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter');
    const card2 = new Card(
      14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder');
    const card3 = new Card(
      12,
      'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix',
      'playing with bubble wrap'],
      'playing with bubble wrap');

      const deck = new Deck([card1, card2, card3]);

      const round = new Round(deck);
      round.takeTurn('ballons');
      round.takeTurn('gallbladder')
      // expect(round.deck.card[round.turn]).to.equal(card1);
      // expect(round.deck.card[round.turn]).to.equal(card2);
  });
});
