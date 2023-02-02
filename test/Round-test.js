  const chai = require('chai');
  const expect = chai.expect;
  const assert = chai.assert;

  const Round = require('../src/Round');
  const Deck = require('../src/Deck');
  const Card = require('../src/Card') 

describe('Round', function() {

beforeEach(() => {
  
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea  otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
   
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck)
  const currentCard = card1
});
it('should be a function', function () {
  
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  let deck = new Deck([card1]);
  const round = new Round(deck);

  expect(Round).to.be.a('function')
}); 
it('should return current card at start of new round', function() {
  
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');

  let deck = new Deck([card1, card2]);
  const round = new Round(deck);
  const currentCard = card1

  expect(round).to.deep.equal(new Round(deck));
  round.returnCurrentcard(currentCard);
});
it('should take a turn and compare players guess with correct answer which returns a correct/incorrect depending.', function() {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
   
  const deck = new Deck([card1, card2, card3]);
  const round = new Round(deck)
  const currentCard = card1

  expect(round).to.deep.equal(new Round(deck));
  round.returnCurrentcard(currentCard);
  round.takeTurn(guess)
});

});
