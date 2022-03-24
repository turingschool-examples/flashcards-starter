const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
    let card;
    let card2;
    let card3;
    let deck;
    let round;

    beforeEach(function() {
        card = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()");
        card2 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
        card3 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        deck = new Deck([card, card2, card3]);
        round = new Round();
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    })

    it('should make an instance of round', function() {
        expect(round).to.be.an.instanceOf(Round);
    })

    it('should have a deck', function() {
        const round = new Round(deck);

        expect(round.currentDeck).to.equal(deck);
    })

    it('should return the first card on the deck', function() {
        const round = new Round(deck);

        let returnCard = round.returnCurrentCard();

        expect(returnCard).to.equal(card);
    })

    it('should start at 0 rounds', function() {
        const round = new Round();

        expect(round.turns).to.equal(0);
    })

    it('should start with no incorrect guesses', function() {
        const round = new Round();

        expect(round.incorrectGuesses).to.deep.equal([]);
    }) 

    it('should increase turn when a guess is made', function() {
        const round = new Round(deck)

        round.takeTurn();

        expect(round.turns).to.equal(1);
    })
    
    it('should make a turn when a guess is made', function() {
        const round = new Round(deck);
        const turn = new Turn('slice()', card)
        
        round.takeTurn('slice()');
        
        expect(round.currentTurn).to.be.an.instanceOf(Turn)
    })

    it('should go to the next card', function() {
        const round = new Round(deck)

        round.takeTurn();

        expect(round.currentDeck.cards[round.turns]).to.equal(card2)
    })

    it('should record incorrect guesses', function() {
        const turn = new Turn('slice()', card)
        const round = new Round(deck)

        round.takeTurn('slice()')

        expect(round.incorrectGuesses).to.deep.equal([card.id])
    })

    it('should return Incorrect if the guess is wrong', function() {
        const turn = new Turn('slice()', card)
        const round = new Round(deck)

        let userTurn = round.takeTurn('slice()')

        expect(userTurn).to.equal('Incorrect!');
    })

    it('should return Correct if the guess is right', function() {
        const turn = new Turn('splice()', card)
        const round = new Round(deck)

        let userTurn = round.takeTurn('splice()')

        expect(userTurn).to.equal('Correct!');
    })

    it('should calculate the percent correct', function() {
        const turn = new Turn('slice()', card)
        const round = new Round(deck)

        let userTurn = round.takeTurn('slice()')
        let correct = Math.round(100 - round.incorrectGuesses.length/round.currentDeck.cards.length * 100)
        
        round.calculatePercentCorrect();

        expect(round.calculatePercentCorrect()).to.equal(correct)
    })

    it('should tell the user the round is over', function() {
        const turn = new Turn('slice()', card)
        const round = new Round(deck)

        let userTurn = round.takeTurn('slice()')
        let correctPercent = Math.round(100 - round.incorrectGuesses.length/round.currentDeck.cards.length * 100)

        round.calculatePercentCorrect();

        round.endRound();

        expect(round.endRound()).to.equal(`**Round over!** You answered <${correctPercent}>% of the questions correctly!`)
    })

})