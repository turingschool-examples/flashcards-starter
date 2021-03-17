const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', 
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
      ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

//   it('should create a new instance of Turn', function() {
//     const card1 = new Card(1, 'What is Robbie\'s favorite animal',
//       ['sea otter', 'pug', 'capybara'], 'sea otter');
//     const card2 = new Card(14, 'What organ is Khalid missing?', 
//       ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
//     const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', 
//       ['listening to music', 'watching Netflix', 'bubble wrap'], 'bubble wrap');

//     const deck = new Deck([card1, card2, card3]);
//     const round = new Round(deck)
//     const turn = new Turn();
//     expect(round.takeTurn()).to.be.an.instanceof(Turn);
//   });

//   it('should update the turns count when a turn is played', function() {
//     const round = 
//   });

}); 