const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");
const Game = require('../src/Game.js');

describe('Round', () => {
    let card1, card2, card3, deck, round, game;

    beforeEach(function () {
        card1 = new Card(1, 'What is my favorite web language?', ['JavaScript', 'Python', 'TypeScript'], 'JavaScript');
        card2 = new Card(2, 'Who is Teddy\'s best friend?', ['Pepper', 'Kiba', 'Dingo'], 'Dingo');
        card3 = new Card(3, 'What is my favorite TV show?', ['House', 'Breaking Bad', 'Grey\'s Anatomy'], 'Breaking Bad');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        game = new Game();
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    })
    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    })

    it('should contain a deck of cards', () => {
        expect(round.deck).to.equal(deck.cards)
    })

    it('should default to 0 turns', () => {
        expect(round.turns).to.equal(0);
    })

    it('should default currentCard to the first card in a deck', () => {
        expect(round.currentCard).to.equal(card1);
    })

    it('should return the current card', () => {
        const returnCard = round.returnCurrentCard();
        expect(returnCard).to.equal(card1);
    })

    it('should be able to update currentCard after taking a guess', () => {
        round.takeTurn('Javascript');
        expect(round.returnCurrentCard()).to.equal(card2);
    })

    it('should be able to update turn count after taking a guess', () => {
        round.takeTurn('Python');
        expect(round.turns).to.equal(1);
    })

    it('should default to 0 incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    })

    it('should be able to add to incorrect guesses', () => {
        round.takeTurn('JavaScript');
        expect(round.incorrectGuesses).to.deep.equal([])

        round.takeTurn('Kiba');
        expect(round.incorrectGuesses).to.deep.equal([2]);
    })

    it('should be able to give feedback', () => {
        const badFeedback = round.takeTurn('Python');
        const goodFeedback = round.takeTurn('Dingo');

        expect(badFeedback).to.equal('incorrect');
        expect(goodFeedback).to.equal('correct');
    })

    it('should be able to calculate percentage of correct answers test', () => {
        round.takeTurn('JavaScript');
        round.takeTurn('Kiba');
        round.takeTurn('Breaking Bad');
        const correctPercentage = round.calculatePercentCorrect();

        expect(correctPercentage).to.equal(67);
    })

    it('should return 100 percent if all answers are correct', () => {
        round.takeTurn('JavaScript');
        round.takeTurn('Dingo');
        round.takeTurn('Breaking Bad');
        const correctPercentage = round.calculatePercentCorrect();

        expect(correctPercentage).to.equal(100);
    })

    it('should be able to end round', () => {
        const end = round.endRound();
        expect(end).to.equal(`** Round over! ** You answered 100% of the questions correctly!`);
    })

    it('should time the round', () => {
        expect(round.startingTime).to.be.undefined;
        game.start();
        game.currentRound.endRound();
        expect(game.currentRound.startTime).to.be.above(0);
    })

})