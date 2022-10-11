const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let turn1, turn2, card1, card2;

    beforeEach(() => {
        turn1 = new Turn('pug', card1);
        turn2 = new Turn('sea otter', card2);
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    });

    it('should be instantiated with two arguments', () => {
        expect(turn1).to.be.an.instanceOf(Turn);
    });

    it('should have a method that returns a guess', () => {
        let guess = turn1.returnGuess();
        expect(guess).to.equal('pug');
    });

    it('should have a method that returns the Card', () => {
        let returnCard = turn1.returnCard()
        expect(returnCard).to.deep.equal(card1);
    });

    it('should have a method that returns a boolean indicating user guess matches the correct answer on the card', () => {
        let guess = turn2.evaluateGuess();
        expect(guess).to.equal(true);
    });

    it('should have a method that returns if the answer is correct the guess is correct', () => {
        let feedback = turn2.giveFeedback();
        expect(feedback).to.equal('correct!');
    });

    it('should have a method that returns if the answer is incorrect the guess is incorrect', () => {
        let feedback2 = turn1.giveFeedback();
        expect(feedback2).to.equal('incorrect!!');
    });
});