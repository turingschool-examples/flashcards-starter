const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', () => {
        const turn = new Turn()
        expect(Turn).to.be.a('function')
    })

    it('should be an instance of Card', () => {
        const card = new Turn();
        expect(card).to.be.an.instanceof(Turn);
      })

    it('should store a guess', () => {
        const turn = new Turn('sea otter')
        expect(turn.guess).to.equal('sea otter')
    })

    it('should store a card', () => {
        const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const turn = new Turn('sea otter', card)
        expect(turn.card).to.be.an.instanceof(Card)
    })

    it('can return the guess', () => {
        const card = new Card(2, 'What is Zac\'s favorite ice cream?', ['chocolate', 'vanilla', 'choco mint'], 'choco mint')
        const turn = new Turn('chocolate', card)
        expect(turn.returnGuess()).to.equal('chocolate')
    })

    it('can return the card', () => {
        const card = new Card(2, 'What is Zac\'s favorite ice cream?', ['chocolate', 'vanilla', 'choco mint'], 'choco mint')
        const turn = new Turn('chocolate', card)
        expect(turn.returnCard()).to.be.an.instanceof(Card)
    })

    it('can evaluate the guess', () => {
        const card = new Card(2, 'What is Zac\'s favorite ice cream?', ['chocolate', 'vanilla', 'choco mint'], 'choco mint')
        const turn = new Turn('chocolate', card)
        expect(turn.evaluateGuess()).to.equal(false)
        const turn2 = new Turn('choco mint', card)
        expect(turn2.evaluateGuess()).to.equal(true)
    })

    it('can give feedback', () => {
        const card = new Card(3, 'What is my favorite game?', ['overwatch', 'league of legends', 'valorant'], 'overwatch')
        const turn = new Turn('valorant', card)
        expect(turn.giveFeedback()).to.equal('incorrect!')
        const turn2 = new Turn('overwatch', card)
        expect(turn2.giveFeedback()).to.equal('correct!')
    })
})