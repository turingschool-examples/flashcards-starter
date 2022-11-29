const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe("Turn", () => {
    let turn;
    let card = new Card(
        1, 
        "What is my favorite game?",
        ["Hollow Knight", "DRG", "Rocket League"],
        "Hollow Knight"
    );

    beforeEach(() => {
        turn = new Turn("DRG", card);
    });

    it('Should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('Should be a new instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('Should store a guess and a card value', () => {
        expect(turn.guess).to.equal('DRG');
        expect(turn.card).to.equal(card);
    });

    it("Should have a method that returns the user's guess", () => {
        let userGuess = turn.returnGuess();

        expect(userGuess).to.equal(turn.guess);
    });

    it("Should have a method that returns the current Card", () => {
        let currentCard = turn.returnCard();

        expect(currentCard).to.equal(card);
    });

});