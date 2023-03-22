const chai = require("chai");
const expect = chai.expect;
const Round = require("../src/Round");
const Card = require("../src/Card")
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

    it("should return the current card being played", function() { // Need a function
        const round = new Round();                                 // The function will return a card object
        const card = new Card()                                    // The method will not update any properties
                                                                   // no different possible outcomes
        expect(round.returnCurrentCard()).to.equal(card);
    });

    it("should update the turns count", function() {
        round.takeTurn()                                        //Need a function
        expect(round.turns).to.equal(1);                        //will call methods from turn for guesses/gives feedback
        round.takeTurn()                                        // will need to store ids of incorrect guesses.
        round.takeTurn()                                        // the method will update a property for the turns count
        expect(round.turns).to.equal(3);                        // no different possible outcomes
    });
    
    it("should return card ")


});

// Your Round class should meet the following requirements:
takeTurn: method that updates turns count, evaluates guesses, gives 
           feedback, and stores ids of incorrect guesses

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id)
//      in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! **
//      You answered <>% of the questions correctly!’