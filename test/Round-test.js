const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/turn");
// What is the value of each property?
// Does the method return anything?
// Does the method update any properties?
// Are there different possible outcomes to test for based on different arguments being passed in?

describe("Round", function() {
    it("should be a function", function() {
        const round = new Round();

        expect(round).to.be.a("function")
    });

    it("should be an instance of round", function() {
        const round = new Round();

        expect(round).to.be.an.instanceof(Round);
    });

    it("should have a deck", function() {
        const deck = new Deck();
        const round = new Round();

        expect(round.deck).to.deep.equal(deck)
    });

    it("should return the current card being played", function() { 
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3])
        
        expect(round.returnCurrentCard()).to.deep.equal(deck.card1);
    });

    it("should have a counter for turns that starts at 0", function() {
        const round = new Round();

        expect(round.turnsCount).to.equal(0);
    });

    it("should update the turns count", function() {
        const round = new Round();  

        round.takeTurn()                                        
        expect(round.turnsCount).to.equal(1);                        
        round.takeTurn()                                        
        round.takeTurn()                                        
        expect(round.turnsCount).to.equal(3);                        
    });

    it("should be able to store incorrect answers", function() {
        const round = new Round();

        expect(round.incorrectGuesses).to.equal([]);
    });
 
    it("should evalute a guess during the round", function() {
        const round = new Round(); 

        expect(round.takeTurn("pug")).to.equal("Incorrect!");
        expect(round.takeTurn("sea otter")).to.equal("Correct!");
    });

    it("should return the number of incorrect answers", function() {
        const round = new Round();
        
        expect(round.takeTurn("pug")).to.equal("Incorrect!");
        expect(round.incorrectGuesses.length).to.equal(1);
        expect(round.takeTurn("capybara")).to.equal("Incorrect!");
        expect(round.incorrectGuesses.length).to.equal(2);
    });

    it("should take a turn", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.turnsCount).to.equal(0);
        expect(round.numberIncorrect).to.equal([]);

        //First Turn
        expect(round.takeTurn("pug")).to.equal("Incorrect!");
        expect(round.turnsCount).to.equal(1);
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.returnCurrentCard).to.deep.equal(card2)
        //Second Turn
        expect(round.takeTurn("gallbladder")).to.equal("Correct!");
        expect(round.turnsCount).to.equal(1);
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.returnCurrentCard).to.deep.equal(card3)
    });

    it("should calculate percentage and end round", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn("sea otter");
        round.takeTurn("gallbladder");
        round.takeTurn("watching");

        expect(round.turnsCount).to.equal(3);
        expect(round.calculatePercentCorrect()).to.equal(66.66);
        expect(round.endRound()).to.equal("** Round over! ** You answered 66.66% of the questions correctly!")
    });
});
// endRound: method that prints the following to the console: ‘** Round over! **
//      You answered <>% of the questions correctly!’