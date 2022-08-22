const { expect } = require("chai");

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', () => {
    it('should be a function', () => {
        expect(Turn).to.a('function');
    });

    it('should return guessed answer', () => {
        let newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        let newGuess = new Turn("pug", newCard);
        let result = newGuess.returnGuess();
        expect(result).to.equal('pug')
    });

    it('should return card', () => {
        let newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        let newGuess = new Turn("pug", newCard);
        let result = newGuess.returnCard();
        expect(newCard.id).to.equal(1)

    });

    it.skip('should returns a boolean indicating if the guess matches the correct answer on the card', () => {

    });

    it.skip('should returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.', () => {

    })
} )