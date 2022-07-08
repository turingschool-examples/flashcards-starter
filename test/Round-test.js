const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Round', function() {
  
  let card1
  let card2
  let deck
  let round

 beforeEach(() => {

   card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
   card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   deck = new Deck([card1, card2]);
   round = new Round(deck)
           
 });

it('should be a funcion', function() {
    expect(Round).to.be.a('function');
});

it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

it('Each time a player takes a turn, the turn increments by 1', function() {
   expect(round.turns).to.equal(0)
   round.takeTurn()
   expect(round.turns).to.equal(1)
})

it('should return a current card', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });
  

it('should take in incorrect guesses', function() {
  expect(round.takeTurn()).to.equal('INCORRECT')
});

it('should take in correct guesses', function() {
  expect(round.takeTurn()).to.equal('CORRECT!!!')
});

it('should calculate the percentage of correct gussses at the end of the game', function() {
  expect(round.calculatePercentCorrect()).to.equal(perccent);
})


});
