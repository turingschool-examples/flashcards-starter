const expect = require('chai').expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const data = require('../src/data');
describe('Round', function() {
  let card1, card2, card3, deck, round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    turn = new Turn(null, card1)

    round = new Round(deck, turn);
  });
  it('should be a function', function() {
    expect(Round).to.be.a('function')
  });
  it('should instantiate a round', function() {
    expect(round).to.be.an.instanceof(Round)
  })
  it('should show current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
    //Turn class has this method
  })




});
