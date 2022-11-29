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

    it('Should be able to evaluate if a guess is correct', () => {
        let newTurn = new Turn("Hollow Knight", card);

        let guess1 = turn.evaluateGuess();
        let guess2 = newTurn.evaluateGuess();

        expect(guess1).to.equal(false);
        expect(guess2).to.equal(true);
    });

    it('Should be able to give feedback if the answer is correct or incorrect', () => {
        let newTurn = new Turn("Hollow Knight", card);
        
        let feedback1 = turn.giveFeedback();
        let feedback2 = newTurn.giveFeedback();

        expect(feedback1).to.equal('incorrect!');
        expect(feedback2).to.equal('correct!');
    });

});