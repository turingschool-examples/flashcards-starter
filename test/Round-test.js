const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let deck, card1, card2, card3, round;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should store a deck of cards', () => {
        expect(round.deck.cards).to.deep.equal(deck.cards);
    });

    it('should have a default of 0 turns', () => {
        expect(round.turns).to.equal(0);
    });

    it('should have turns increment by 1 after each round', () => {
        round.takeTurn('');
        round.takeTurn('');
        expect(round.turns).to.equal(2);
    });

    it('should store the incorrect guesses', () => {
        round.takeTurn('pug');
        expect(round.incorrectGuesses).to.deep.equal([1]);
        round.takeTurn('gallbladder');
        expect(round.incorrectGuesses).to.deep.equal([1]);
        round.takeTurn('William');
        expect(round.incorrectGuesses).to.deep.equal([1, 12]);
    });

    it('should have next card become the current card', () => {
        round.takeTurn('gallbladder');
        round.returnCurrentCard();
        expect(round.currentCard).to.equal(card2);
    });

    it('should return correct if the guess is correct', () => {
        expect(round.takeTurn('sea otter')).to.equal('correct!');
    });

    it('should return incorrect if the guess is incorrect', () => {
        expect(round.takeTurn('capybara')).to.equal('incorrect!');
    });

    it('should return the percentage of accurate guesses', () => {
        round.takeTurn('sea otter');
        round.takeTurn('appendix');
        round.takeTurn('Fitzgerald');
        expect(round.calculatePercentCorrect()).to.equal(67);
    });

    it('should have an end round method and message showing number of questions answered correctly', () => {
        round.endRound();
        expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.percentage} of the questions correctly!`)
    });
});