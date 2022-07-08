const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');


describe('Round', () => {
      let round;
      let deck;
      let card1;
      let card2;
      let card3;

      beforeEach( () => {
          card1 = new Card(1, "What allows you to define a set of related infor,ation using key-value pairs?", ["object", "array", "function"], "object");
          card2 = new Card(2, "What is a comma-separated list of related values?" ["array", "object", "function"], "array")
          card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
          deck = new Deck([card1, card2, card3]);
          round = new Round(deck);
      });

      it('should be a function', () => {
          expect(Round).to.be.a('function')
      });

      it('should instantiate an instance of Round', () => {
          expect(round).to.be.an.instanceof(Round)
      });

      it('should have currentCard as the first Card in the Deck', () => {
          expect(round.returnCurrentCard()).to.equal(round.deck.cards[0])
      });

      it('should update turn count', () => {

          round.takeTurn()
          round.takeTurn()
          round.takeTurn()

          expect(round.turnCount).to.equal(3)
      });

      it('should evaluate correct guesses', () => {

          round.takeTurn('object')
          expect(round.isCorrect).to.equal(true)
      });

      it('should evaluate incorrect guesses', () => {

          round.takeTurn('function')
          expect(round.isCorrect).to.equal(false)
      });

      it('should make the next card the current card', () => {
        expect(round.deck.cards[0].id).to.equal(1)

        round.takeTurn()

        expect(round.deck.cards[0].id).to.equal(2)
      });

      it('should store incorrect guesses in an array of incorrect guesses', () => {

        round.takeTurn('function')

        expect(round.incorrectGuess.length).to.equal(1)
      });

      it('should store correct guesses in an array of correct guesses', () => {

        round.takeTurn('object')

        expect(round.correctGuess.length).to.equal(1)
      });

      it('should provide feedback for a correct guess', () => {
        expect(round.takeTurn('object')).to.equal('Correcto-mundo!')
      });

      it('should provide feedback for an incorrect guess', () => {
        expect(round.takeTurn('function')).to.equal('That\'s incorrect, try again.')
      });

      it('should calculate and return 100% when all answers are correct', () => {

        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')

        console.log(round.calculatePercentCorrect())
        expect(round.calculatePercentCorrect()).to.equal(100)
      });

      it('should calculate and return 0% when all answers are incorrect', () => {

        round.takeTurn('array')
        round.takeTurn('object')
        round.takeTurn('array')

        console.log(round.calculatePercentCorrect())
        expect(round.calculatePercentCorrect()).to.equal(0)
      });

      it('should calculate and return the percentage of correct answers to incorrect answers', () => {

        round.takeTurn('object')
        round.takeTurn('function')
        round.takeTurn('mutator method')

        console.log(round.calculatePercentCorrect())
        expect(round.calculatePercentCorrect()).to.equal(67)
      });

      it('should print **Round Over!** You answered <>% of the questions correctly!', () => {

        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')

        expect(round.endRound()).to.equal('**Round Over!** You answered 100% of the questions correctly!')
      });

});
