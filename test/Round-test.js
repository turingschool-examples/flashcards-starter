const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let cards;
    let deck;
    let round;

    beforeEach(() => {
        card1 = new Card(1, 'What is my name?', ['Ryan', 'Michael', 'Bob'], 'Ryan');
        card2 = new Card(2, 'What is my middle name?', ['Bryan', 'Adam', 'Matthew'], 'Matthew');
        card3 = new Card(3, 'Who is the best dog?', ['Kya', 'Lou', 'Toby'], 'Lou');
        cards = [card1, card2, card3];
        deck = new Deck(cards);
        round = new Round(deck);
    })

    it('should be able to return the current card', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    })

    it('when taking a turn, should update the turn count', () => {
        round.takeTurn('Ryan');
        expect(round.turns).to.equal(1);

        round.takeTurn('Ryan');
        expect(round.turns).to.equal(2);
    })

    it('when taking a turn, should change the current card', () => {
        round.takeTurn('Ryan');
        expect(round.currentCard).to.equal(card2);

        round.takeTurn('Ryan');
        expect(round.currentCard).to.equal(card3);
    })

    it('when taking a turn and guessing incorrectly, should push card id into incorrectGuesses', () => {
        round.takeTurn('Michael');
        expect(round.incorrectGuesses).to.deep.equal([1]);

        round.takeTurn('Bryan');
        expect(round.incorrectGuesses).to.deep.equal([1, 2]);
    })

    it('should be able to calculate and return the percentage of correct guesses', () => {
        round.takeTurn('Ryan');
        round.takeTurn('Bryan');
        round.takeTurn('Lou');
        expect(round.calculatePercentCorrect()).to.equal('66.67%')
    })

    it('should be able to end round and provide results', () => {
        round.takeTurn('Ryan');
        round.takeTurn('Bryan');
        round.takeTurn('Lou');
        expect(round.endRound()).to.equal('**Round over!** You answered 66.67% of the questions correctly!')
    })
})