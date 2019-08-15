
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, card4, turn1, turn2, turn3, turn4, deck, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  turn1 = new Turn('sea otter', card1);
  turn2 = new Turn('gallbladder', card2);
  turn3 = new Turn('Fitzgerald', card3);
  turn4 = new Turn('blah', card4);
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
});


describe('Round', function() {


  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the current card being played', function() { expect(round.returnCurrentCard()).to.deep.equal(card1);

  });

  it('gives feedback', function () {
    expect(round.takeTurn()).to.deep.equal(1);
  });


  // it('should return current card', function () {
  //   expect(round.returnCurrentCard()).to.equal(card1);
  // });  

  // it('eveluates guesses, gives feedback, and stores ids of incorrect guesses', function () {
  //   expect(round.takeTurn()).to.deep.equal(card1);
  // });

});