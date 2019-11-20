const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const deck = new Deck()
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const deck = new Deck()
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take in a deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const turn = new Turn("sea otter", card1);
    expect(round.deck).to.deep.equal(deck.cards);
    });

    // it('should be able return back a card', function() {
    //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    //   const deck = new Deck([card1, card2, card3]);
    //   const round = new Round(deck);
    //   expect(round.returnCurrentCard()).to.equal(card2);
    //   });
});
