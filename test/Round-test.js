const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let round
  let deck
  let card1
  let card2
  let card3
  let turn


  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
     deck = new Deck([card1, card2, card3]);
     turn = new Turn('correct!', card3);
     round = new Round(deck);
 });


   it('should be a function', function() {
     expect(Round).to.be.a('function');
   });

   it('should be an instance of Round', function() {
     expect(round).to.be.an.instanceof(Round);
   });

   it('should return current card being played', function() {
     expect(round.returnCurrentCard()).to.equal(deck.cards[0])
   });

   it('should update turns count', function () {
     round.takeTurn()

     expect(round.turnCount).to.equal(1);
   });

   it('Should be able to store incorrect guesses', function () {
     expect(round.incorrectGuesses).to.be.an('array');
   });

   it('should be able to evaluate guesses', function () {
     round.takeTurn('sea otter')

     expect(round.result).to.equal(true);
   });

   it('should be able to give feedback', function () {
     round.takeTurn()
     expect(round.takeTurn('pug')).to.equal('incorrect')
   });

   it('should calculate and returns the percentage of correct guesses', function () {
     round.takeTurn('sea otter')
     round.takeTurn('pug')
     expect(round.calculatePercentCorrect()).to.equal(50);
   });

   it('should be able to end round', function () {
     round.takeTurn('sea otter')
     round.takeTurn('pug')
     round.calculatePercentCorrect();
     expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)

   });




});





// it('currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round', function() {
  //   let turn =
  //   expect(deck.card[0]).to.equal()
  // });
