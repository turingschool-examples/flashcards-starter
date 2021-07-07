const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', () => {
    let card1, card2, card3, deck, round;

    beforeEach(() => {
        card1 = new Card(10, 'Which iteration method returns the first array element where the callback function returns true?', ['find()', 'filter()', 'forEach()'], 'find()');
        card2 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
        card3 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ['Object.keys()', 'Object.values()', 'reduce()'], 'Object.keys()');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should instanciate a Deck', () => {
        expect(round.deck).to.be.an.instanceOf(Deck);
    });

    it('should start with the first card in the deck', () => {
        expect(round.currentCard).to.equal(deck.cards[0]);
    });

    it('should be able to count turns', () => {
        expect(round.numOfTurns).to.equal(0);
    });

    it('should start with no incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('should return the current card', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    });

    it('should be able to increment number of turns', () => {
        round.takeTurn('guess');
        round.takeTurn('guess');
        round.takeTurn('guess');

        expect(round.numOfTurns).to.equal(3);
    });

    it('should update the current card to the next card', () => {
        round.takeTurn();
        expect(round.currentCard).to.equal(card2);

        round.takeTurn();
        expect(round.currentCard).to.equal(card3);
    });

    it('should be able to store an incorrect guess', () => {
        round.takeTurn('guess');
        expect(round.incorrectGuesses.length).to.equal(1);
    })

    it('should calculate and return the percentage of correct guesses', () => {
        round.takeTurn('find()');
        round.takeTurn('guess');
        round.takeTurn('Object.keys()');

        expect(round.calculatePercentCorrect()).to.equal(67);
    });

    it('should print the percentage of questions the user answered correctly', () => {
        round.takeTurn('find()');
        round.takeTurn('guess');
        round.takeTurn('Object.keys()');

        expect(round.endRound()).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
    })
});