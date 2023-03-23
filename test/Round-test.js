const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe("Round", function() {
    it.skip("should be a function", function() {
        const round = new Round();

        expect(Round).to.be.a("function")
    });

    it.skip("should be an instance of round", function() {
        const round = new Round();

        expect(round).to.be.an.instanceof(Round);
    });

    it.skip("should have a deck", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        expect(round.deck).to.deep.equal(deck)
    });

    it.skip("should have a current card that equals first card in deck", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck)
        console.log(deck.cards[0])
        expect(round.currentCard).to.deep.equal(deck.cards[0])
    });

    it.skip("should return the current card being played", function() { 
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3])
        const round = new Round(deck)
        
        expect(round.returnCurrentCard()).to.deep.equal(deck.card1);
    });

    it.skip("should have a counter for turns that starts at 0", function() {
        const round = new Round();

        expect(round.turnsCount).to.equal(0);
    });

    it.skip("should update the turns count", function() {
        const round = new Round();  

        round.takeTurn()                                        
        expect(round.turnsCount).to.equal(1);                        
        round.takeTurn()                                        
        round.takeTurn()                                        
        expect(round.turnsCount).to.equal(3);                        
    });

    it.skip("should be able to store incorrect answers", function() {
        const round = new Round();

        expect(round.incorrectGuesses).to.equal([]);
    });
 
    it.skip("should evalute a guess during the round", function() {
        const round = new Round(); 

        expect(round.takeTurn("pug")).to.equal("Incorrect!");
        expect(round.takeTurn("sea otter")).to.equal("Correct!");
    });

    it.skip("should return the number of incorrect answers", function() {
        const round = new Round();
        
        expect(round.takeTurn("pug")).to.equal("Incorrect!");
        expect(round.incorrectGuesses[0]).to.equal(1);
        expect(round.takeTurn("capybara")).to.equal("Incorrect!");
        expect(round.incorrectGuesses[1]).to.equal(1);
    });

    it.skip("should take a turn", function() {
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
        expect(round.incorrectGuesses[0]).to.equal(1)
        expect(round.returnCurrentCard).to.deep.equal(card2)
        //Second Turn
        expect(round.takeTurn("gallbladder")).to.equal("Correct!");
        expect(round.turnsCount).to.equal(1);
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.returnCurrentCard).to.deep.equal(card3)
    });

    it.skip("should calculate percentage and end round", function() {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');   
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);

        round.takeTurn("sea otter");
        round.takeTurn("gallbladder");
        round.takeTurn("watching Netflix");

        expect(round.turnsCount).to.equal(3);
        expect(round.calculatePercentCorrect()).to.equal(66.66);
        expect(round.endRound()).to.equal("** Round over! ** You answered 66.66% of the questions correctly!")
    });
});
// endRound: method that prints the following to the console: ‘** Round over! **
//      You answered <>% of the questions correctly!’