const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', function() {
    let cards;
    let deck;
    let round;

    beforeEach(function() {
        cards = [
            new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method'),
            new Card(13, 'The callback function for map() returns a modified version of the current element.', ['true', 'false'], 'true'),
            new Card(23,'Which prototype method can make a copy of a pre-existing object or merge two or more objects together?', ['Object.assign()', 'Object.keys()', 'filter()'], 'Object.assign()')
        ]
        deck = new Deck(cards)
        round = new Round(deck)
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    })

    it('should be a new instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round)
    })

    it('should return the current card being played', function() {
        expect(round.returnCurrentCard()).to.equal(round.currentCard);
    })

    it('should update turn count after each turn is taken', function() {
        round.takeTurn('mutator method')
        round.takeTurn('true')
        round.takeTurn('Object.assign()')
        expect(round.turns).to.equal(3);
    })

    it('should store incorrect user guesses into an array', function() {
        expect(round.incorrectGuesses).to.deep.equal([])
        round.takeTurn('iteration method')
        expect(round.incorrectGuesses.length).to.equal(1)
    })

    it('should give user feedback on their guess after a turn is taken', function() {
        expect(round.takeTurn('accessor method')).to.equal('Incorrect!')
        expect(round.takeTurn('true')).to.equal('Correct!')
    })

    it('should update the current card to be the next card in the deck', function() {
        expect(round.currentCard).to.equal(cards[0])
        round.takeTurn('mutator method')
        expect(round.currentCard).to.equal(cards[1])
        round.takeTurn('true')
        expect(round.currentCard).to.equal(cards[2])
    })

    it('should calculate the precentage of correct user guesses', function() {
        round.takeTurn('iteration method')
        round.takeTurn('true')
        round.takeTurn('Object.assign()')
        expect(round.calculatePercentCorrect()).to.equal(66)
    })
    it('should tell the user what precent of their guesses were correct', function() {
        round.takeTurn('iteration method')
        round.takeTurn('true')
        round.takeTurn('Object.assign()')
        expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
    })
});