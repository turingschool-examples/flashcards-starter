const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
		const card = new Card();
		
    expect(card).to.be.an.instanceof(Card);
	}); 
	
	it('should store an id', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		
		expect(card.id).to.equal(1);
  });  

	it('if missing an id, id should be undefined', function() {
    const card = new Card('What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
	 
		expect(card.id).to.equal(undefined);
	});

  it('should store a question', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		
		expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
	});
	
	it('if missing question, correct answer should be undefined', function() {
		const card = new Card(1, ['object', 'array', 'function'], 'object');

		expect(card.correctAnswer).to.equal(undefined);
	})

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		
		expect(card.answers).to.deep.equal(['object', 'array', 'function']);
	});
	
	it('if missing possible answers, possible answers should be undefined', function() {
		const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', 'object');

		expect(card.answers).to.equal(undefined);
	})

  it('should store the correct answer', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
		
		expect(card.correctAnswer).to.equal('object');
	});
	
	it('if missing correct answer, correct answer should be undefined', function() {
		const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function']);

		expect(card.correctAnswer).to.equal(undefined);
	});
})