const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

describe('Turn', function() {
    
    it('should be an instance of Turn', () => {
      const turn = new Turn();

      expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should take in the user\'s guess', () => {
        const turn = new Turn('pug');

        expect(turn.guess).to.equal('pug');
    });

    it('should take in the card as an argument', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        expect(turn.card).to.equal(card);
    })

    it('should have a method that returns the guess', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        let guess = turn.returnGuess();

        expect(guess).to.equal('pug');
    })

});