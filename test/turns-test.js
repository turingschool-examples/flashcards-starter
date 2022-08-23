const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/turns');

describe('Turns', function() {
    let turn;
    let card;

    beforeEach(() => {
        // console.log("My code is running!")
        card = new Card(1, 'What animal is cuter, a puppy or a kitten?', ['puppy', 'kitten'], 'puppy')
        turn = new Turn('puppy', card)
        turn2 = new Turn('kitten', card)
        
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should be an instance of Turn', () =>  {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should be able to store a guess', () =>  {
        expect(turn.guess).to.equal('puppy')
    })

    it('should be able to store a Card', () =>  {
        expect(turn.currentCard).to.equal(card)
    })

    it('should be able to return a guess', () =>  {
        turn.returnGuess();
        expect(turn.guess).to.equal('puppy')
    })

    it('should be able to return a Card', () =>  {
        turn.returnCard();
        expect(turn.currentCard).to.equal(card)
    })

    it('should be able to match the correct answer', () =>  {
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })    

    it('should tell if a guess is correct or incorrect', () =>  {
        turn.evaluateGuess()
        expect(turn.giveFeedback()).to.equal('correct')
        expect(turn2.giveFeedback()).to.equal('incorrect')
    })
})