const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  
  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 
  
  it('should be able to accept a user`s guess and a card object', function() {
    const card = new Card(1, 'Which of the Bronte sisters was the author of Wuthering Heights?', ['Emily', 'Anne', 'Charlotte'], 'Emily');
    const turn = new Turn('Emily', card);
    expect(turn.guess).to.equal('Emily');
    expect(turn.card).to.equal(card);
  });
});

describe('returnGuess', function() {
	it('should return the user`s guess', function() {
		const card = new Card(1, 'Who won the 2023 Oscar for Best Picture', ['EEAAO', 'TAR', 'The Banshees of Inisherin'], 'EEAAO');
		const turn = new Turn('EEAAO', card);
		expect(turn.returnGuess()).to.equal('EEAAO');
	});
});

describe('returnCard', function() {
	it('should return the card object', function() {
		const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		const turn = new Turn('sample guess', card);
		expect(turn.returnCard()).to.equal(card);
	});
});

describe('evaluateGuess', function() {
	it('should return a boolean indicating if the user`s guess matches the correct answer on the card', function() {
		const card = new Card(1, 'In what year was Taiwan founded?', ['1910', '1912', '1924'], '1912');
		const turn1 = new Turn('1910', card);
		const turn2 = new Turn('1912', card);
		expect(turn1.evaluateGuess()).to.equal(false);
		expect(turn2.evaluateGuess()).to.equal(true);
	});
});

describe('giveFeedback', function() {
	it('should return either `incorrect!` or `correct!` based on whether the guess is correct or not', function() {
		const card = new Card(1, 'Which British Prime Minister presided over the formation of the NHS?', ['Clement Attlee', 'David Lloyd-George', 'Margaret Thatcher'], 'Clement Attlee');
		const turn1 = new Turn('David Lloyd-George', card);
		const turn2 = new Turn('Clement Attlee', card);
		expect(turn1.giveFeedback()).to.equal('incorrect!');
		expect(turn2.giveFeedback()).to.equal('correct!');
	});
});