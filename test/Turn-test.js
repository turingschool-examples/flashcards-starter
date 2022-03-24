const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')

const Turn = require('../src/Turn')

describe('Turn', function() {
    let card;
    let turn;

    beforeEach(function(){
        card = new Card(1, 'What is this animal', ['pig', 'otter', 'pub'], 'otter')
        turn = turn = new Turn('penguin', card)
    })
    


    it('should be a function', function() {
        // const turn = new Turn()
        expect(Turn).to.be.a('function');
    })
    it('should be an instance of Turn', function() {
        // const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should have the current card in play', function() {
        expect(turn.currentCard).to.equal(card);
    });

    it('should return the user\'s guess', function() {

        turn.returnGuess()

        expect(turn.returnGuess()).to.equal('penguin');
    });

    it('should return the card', function() {

        turn.returnCard();

        expect(turn.returnCard()).to.equal(card);
    });

    it('should be false if answer is wrong', function() {


        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false)
    });

    it('should be true if answer is correct', function() {
        const card = new Card(3, 'What is H2O', ['water', 'iron', 'tungsten', 'oxygen'], 'water')
        const turn = new Turn('water', card)

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should give feedback based on if it is correct or incorrect', function() {
        const card = new Card(2, 'What is the color of the the ocean', ['blue', 'red', 'orange', 'purple'], 'blue')
        const turn = new Turn('red', card);
        const turn2 = new Turn('blue', card);
        
        turn.giveFeedback();
        turn2.giveFeedback();
        
        expect(turn.giveFeedback()).to.equal('Incorrect!');
        expect(turn2.giveFeedback()).to.equal('Correct!')
    }) 
})