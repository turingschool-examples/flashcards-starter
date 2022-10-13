const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Round', () => {
    let card1, card2, card3, deck, round;
    beforeEach(() => {
    card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
    card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
    card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    });

    it('should return the current card', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should update the current card on a new turn', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1);
        round.takeTurn('Swedish meatballs');
        expect(round.returnCurrentCard()).to.deep.equal(card2);
    });

    it('should evaluate if a guess is correct or incorrect', () => {
        expect(round.takeTurn('Swedish meatballs')).to.equal('correct!');
        expect(round.takeTurn('Canucks')).to.equal('incorrect!');
    });

    it('should store id\'s of incorrect guesses', () => {
        round.takeTurn('Swedish meatballs');
        round.takeTurn('Canucks')
        expect(this.incorrectGuesses = [2])
    });

    it('should begin by displaying the first card', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should begin by displaying the first card', () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });
});