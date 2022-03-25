const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
   let card1;
   let card2;
   let card3;
   let deck;
   let round;

 beforeEach(function() {
   card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
   card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
   card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
   deck = new Deck([card1, card2, card3])
   round = new Round(deck)
 })
 it('should instantiate with a deck', function() {
   expect(round.deck.cards).to.deep.equal([card1, card2, card3])
 })
 it('should have a method to return current card played', function() {
   expect(round.returnCurrentCard()).to.deep.equal({
     id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
   })
 })
 it('should keep track of the number of turns and default to 0', function() {
   expect(round.turns).to.equal(0)
 })
 it('should store all incorrect guesses', function() {
   expect(round.incorrectGuesses).to.deep.equal([])
 })
 it('should have a method called takeTurn that instantiates a new Turn and gives feedback for answers', function() {
   expect(round.takeTurn('sea otter')).to.equal('correct!');
  expect(round.takeTurn('hi')).to.equal('incorrect!');
 })
 it('should update turns count even if the guess is incorrect', function () {
   round.takeTurn('sea otter')
   round.takeTurn('hi')
   round.takeTurn('hi')
   expect(round.turns).to.equal(3)
 })
 it('should make the next card become the current card', function() {
  round.takeTurn('sea otter')
  round.takeTurn('hi')
  expect(round.turns).to.equal(2);
  expect(round.takeTurn('Fitzgerald')).to.equal('correct!')
  expect(round.turns).to.equal(3);
 })
it('should store incorrect guesses in an array', function() {
  round.takeTurn('sea otter')
  round.takeTurn('hi')
  expect(round.turns).to.equal(2);
  expect(round.takeTurn('Fitzgerald')).to.equal('correct!')
  expect(round.turns).to.equal(3);
  expect(round.incorrectGuesses).to.deep.equal([14]);
 })
 it('should have  a method to calculate and return the percentage of correct guesses', function() {
  round.takeTurn('sea otter')
  round.takeTurn('hi')
  expect(round.returnCurrentCard()).to.deep.equal({
   id: 12,
   question: 'What is Travis\'s middle name?',
   answers: ['Lex', 'William', 'Fitzgerald'],
   correctAnswer: 'Fitzgerald'
  });
  expect(round.calculatePercentCorrect()).to.equal(50);
 })
 it('should have a method that ends the round and tells percentage', function() {
   round.takeTurn('sea otter')
    expect(round.endRound()).to.equal(console.log(`** Round over! ** You answered ${round.calculatePercentCorrect()} of the questions correctly!`));
 })
})
