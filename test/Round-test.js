const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let newDeck;
    let newRound;
  
    beforeEach(() => {
      card1 = new Card(9, 'What does the callback function for find() return?', ["boolean", "array", "object"], 'boolean');
      card2 = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ["reduce()", "map()", "filter()"], 'reduce()');
      card3 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ["Object.keys()", "Object.values()", "reduce()"], 'Object.keys()');
      newDeck = new Deck([card1, card2, card3])
      newRound = new Round(newDeck)
    })
    it('should be a function', () => {
     
      expect(Round).to.be.a('function');
    })
    it('should be an instance of Round', () => {
    
      expect(newRound).to.be.an.instanceof(Round);
    })
    it('should have a Deck object for the current deck in play', () => {
// need to represent .deck as an object of deck
     var deck1 = new Deck({ 
            cardQuantity: 30,
     })
      expect(newRound.deck).to.be.an.instanceof(Deck)
    })
    it('should have a method that returns the current card being played', () => {

      
      expect(newRound.currentCard).to.equal();
      expect(newRound.returnCurrentCard()).to.be.a('function');
    })
    it.skip('should be able to take turns', () => {

       expect(newRound.turns).to.equal(0);  
    })
    it.skip('should store incorrectGuesses', () => {

       expect(newRound.incorrectGuesses).to.equal([0]);  
     })
    it.skip('should have a method to record guess input', () => {
        var round1 = new Round({ deck: 30});
        var round2 = new Round({ deck: 34});
        
        var newTurn1 = round1.takeTurn();
        var newTurn2 = round2.takeTurn();
        expect(newTurn1).to.equal('ON POINT!'); 
        expect(newTurn2).to.equal('NEXT TIME! :(');  
      })

    it.skip('should increase turn count', () => {

        expect(newTurn.turns).to.equal(2);
    })  
    it.skip('should increase incorrect guesses', () => {

        takeTurn();
        takeTurn();
        takeTurn();
        takeTurn();
        takeTurn();

        expect(newRound.incorrectGuesses).to.equal([5]);
    })
    it.skip('should have a method that calculates and returns the percentage of correct guesses', () => {
        expect(newRound.calculatePercentCorrect()).to.be.a('function');
        // expect(newTurn.turns).to.equal(.incorrectGuesses/.deck.card1.correctAnswer); ??? REWORK
        expect(newTurn.turns).to.equal(50);
    })
    it.skip('should have a method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’', () => {
        expect(newRound.endRound()).to.be.a('function');
        expect(newRound.endRound()).to.equal('** Round over! ** You answered <>% of the questions correctly!');
    })

    });

       