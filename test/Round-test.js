const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
	
	// beforeEach('should check if round is instantiated', function() {
		// 	const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		// 	const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		// 	const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		
		// 	const deck = new Deck([card1, card2, card3])
		// 	const round = new Round(deck)
		// 	expect(round).to.be.a.instanceOf(Round)
		// })

		it('should work!', function() {
			expect(true).to.equal(true)
		})

	it('should be able to return the current card being played', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		expect(round.returnCurrentCard()).to.equal(card1)
	})

	it('should be able to keep track of number of turns', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		expect(round.turnCount).to.equal(0)
		round.takeTurn()
		round.takeTurn()
		round.takeTurn()
		expect(round.turnCount).to.equal(3)
	})

	it('should be able to create a new instance of Turn', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		round.takeTurn('object')
		expect(round.currentTurn).to.be.instanceOf(Turn)
	})

	it('should move on to the next card in the deck after taking a turn', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		expect(round.returnCurrentCard()).to.equal(card1)
		round.takeTurn('object')
		expect(round.returnCurrentCard()).to.equal(card2)
		round.takeTurn('array')
		expect(round.returnCurrentCard()).to.equal(card3)
	})

	it('should store incorrect guesses', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		round.takeTurn('array')
		expect(round.incorrectGuesses).to.include(1)
	}) 

	it('feedback should be returned when the user takes a turn', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		const result = round.takeTurn('array')
		expect(result).to.equal('incorrect!')
		const result2 = round.takeTurn('array')
		expect(result2).to.equal('correct!')
	})

	it('should be able to calculate the percentage of correct answers', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

		const deck = new Deck([card1, card2, card3])
		const round = new Round(deck)
		round.takeTurn('object')
		round.takeTurn('function')
		const output = round.calculatePercentCorrect() 
		expect(output).to.equal(50)
	})

	it('should be able to end the round', function() {
		const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
		const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
		const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
		const card4 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")


		const deck = new Deck([card1, card2, card3, card4])
		const round = new Round(deck)
		round.takeTurn('object')
		round.takeTurn('array')
		round.takeTurn('iteration method')
		round.takeTurn('accessor method')
		const output = round.endRound()
		expect(output).to.equal('**Round Over!** You answered 25% of the questions correctly!')
	})

	

})

