const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turns = require('../src/Turns');

describe('Turns', () => {

    it('should be a function', () => {
        expect(Turns).to.be.a('function');
    });

    it('should instantiate of Turns', () => {
        const turns = new Turns();
        expect(turns).to.be.an.instanceof(Turns);
    });

    it('should have a user’s guess to the question and object for the current card in play', () => {
        const card = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"); //instance of card
        const turns = new Turns("array", card);
        expect(turns.guess).to.be.a('string');
        expect(turns.guess).to.equal("array");
        expect(turns.currentCard).to.be.an('object');

    });

    it('it should return the guess', () => {
        const card = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"); //instance of card
        const turns = new Turns("array", card);

        turns.returnGuess();

        expect(turns.returnGuess()).to.equal("array")

      });

      it('it should be able to return the current card', () =>{
        const card = new Card;
        const turns = new Turns('guess',card)

        turns.returnCard();

        expect(turns.returnCard()).to.equal(card);

      })
 
      it('should be able to return a boolean indicating if the user’s guess matches the correct answer on the card', () => {
        const card = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"); //instance of card
        const turns1 = new Turns("object", card);
        const turns2 = new Turns("array",card);

        turns1.evaluateGuess();
        turns2.evaluateGuess();

        expect(turns1.evaluateGuess()).to.equal(true);
        expect(turns2.evaluateGuess()).to.equal(false);

      })
 
      it('should tell if the guess is correct or incorrect!', () => {
        const card = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"],"object"); //instance of card
        const turns1 = new Turns("object", card);
        const turns2 = new Turns("array",card);
        
        turns1.evaluateGuess();
        turns1.giveFeedback();
        turns2.evaluateGuess();
        turns2.giveFeedback();

        expect(turns1.giveFeedback()).to.equal('correct!');
        expect(turns2.giveFeedback()).to.equal('incorrect!');

      })
})