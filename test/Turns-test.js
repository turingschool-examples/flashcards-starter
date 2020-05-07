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

	it('on instatiation, if card is not an object, card should be undefined', function() {
		const turn1 = new Turn('pug', 'border collie');

		expect(turn1.card).to.equal(undefined);
	});

	it('on instatiation, if guess is not a string, guess should be undefined', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn(cardA, cardA);

		expect(turn1.guess).to.equal(undefined);
	});

	it('should display the guessed answer', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('pug', cardA);

		const guess1 = turn1.returnGuess();

		expect(guess1).to.equal('pug');
	});

	it('if there is undefined guess, undefined is returned', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn(cardA, cardA);

		const guess1 = turn1.returnGuess();

		expect(guess1).to.equal(undefined);
	});

	it('should return card in play', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('pug', cardA);

		const cardInPlay = turn1.returnCard();

		expect(cardInPlay).to.equal(cardA);
	});

	it('if there is undefined card, undefined is returned', function() {
		const turn1 = new Turn('pug', 'border collie');

		const cardInPlay = turn1.returnCard();

		expect(cardInPlay).to.equal(undefined);
	});

	it('should record true if a user\'s answer is correct', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('sea otter', cardA);

		turn1.evaluateGuess();

		expect(turn1.correct).to.equal(true);
	});

	it('should record false if a user\'s answer is incorrect', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('beaver', cardA);

		turn1.evaluateGuess();

		expect(turn1.correct).to.equal(false);
	});

	it('if there\'s undefined guess, guess evaluation is undefined', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn(cardA, cardA);

		const guessEval = turn1.evaluateGuess();

		expect(guessEval).to.equal(undefined);
	});

	it('should tell the user when their answer is correct', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('sea otter', cardA);

		turn1.evaluateGuess();

		expect(turn1.feedback).to.equal('correct!');
	});

	it('should tell the user when their answer is incorrect', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn('beaver', cardA);

		turn1.evaluateGuess();

		expect(turn1.feedback).to.equal('incorrect!');
	});

	it('if there\'s undefined guess, feedback is not received', function() {
		const cardA = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const turn1 = new Turn(cardA, cardA);

		turn1.evaluateGuess();

		expect(turn1.feedback).to.not.equal('correct!');
	});
})