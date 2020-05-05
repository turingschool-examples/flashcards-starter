const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turns');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should display the guessed answer', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('pug', cardA);
		
        turn1.returnGuess();

        expect(turn1.guess).to.equal('pug');
    })

    it('should return card in play', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn1 = new Turn('pug', cardA);

        turn1.returnCard();

        expect(turn1.card).to.equal(cardA);
    })

    it('should record true or false if a user\'s answer is correct or not', function() {
        const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn1 = new Turn('sea otter', cardA);
        const turn2 = new Turn('beaver', cardA);

        turn1.evaluateGuess();
		turn2.evaluateGuess();

		expect(turn1.correct).to.equal(true);
		expect(turn2.correct).to.equal(false);
	});
	
	it('should tell the user if their answer is correct', function() {
        const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn1 = new Turn('sea otter', cardA);
        const turn2 = new Turn('beaver', cardA);

		turn1.evaluateGuess();
		turn1.giveFeedback();
		turn2.evaluateGuess();
		turn2.giveFeedback();

		expect(turn1.feedback).to.equal('correct!');
		expect(turn2.feedback).to.equal('incorrect!');
	})
})