const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

it('should create an instance of Turn', function() {
   const turn = new Turn();

   expect(turn).to.be.an.instanceof(Turn);
 });

 it('returnGuess method should return guess', function() {
   const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
   const turn = new Turn("object", card);

   expect(turn.returnGuess()).to.equal("object");
 });

 it('returnCard method should return card', function() {
   const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
   const turn = new Turn("object", card);

   expect(turn.returnCard()).to.equal(card);
 });

 it('evaluateGuess should return true if guess matches correct answer', function() {
   const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
   const turn = new Turn("object", card);
   const turn2 = new Turn("array", card);

   expect(turn1.evaluateGuess()).to.equal(true);
   expect(turn2.evaluateGuess()).to.equal(false);
 });

 it('giveFeedback should return "correct!" and "incorrect" where appropriate', function() {
   const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
   const turn = new Turn("object", card);
   const turn2 = new Turn("array", card);

   expect(turn1.evaluateGuess()).to.equal(true);
   expect(turn2.evaluateGuess()).to.equal(false);
 });

})
