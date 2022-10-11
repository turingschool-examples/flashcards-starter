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

        let userGuess = turn.returnGuess();

        expect(userGuess).to.equal('pug');
    })

    it('should have a method that returns the card', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        let presentCard = turn.returnCard();

        expect(presentCard).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal' ,answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
    })

    it('should indicate whether the users guess was correct', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);

        let evaluation = turn.evaluateGuess();

        expect(evaluation).to.equal(true);
    })

    it('should indicate whether the users guess was incorrect', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        let evaluation = turn.evaluateGuess();

        expect(evaluation).to.equal(false);
    })

    it('should display feedback depending on whether the guess is correct', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card);

        let evaluation = turn.evaluateGuess();

        let feedback = turn.giveFeedback();

        expect(feedback).to.equal('correct!');
    })

    it('should display feedback depending on whether the guess is incorrect', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('pug', card);

        let evaluation = turn.evaluateGuess();

        let feedback = turn.giveFeedback();

        expect(feedback).to.equal('incorrect!');
    })

});