const chai = require('chai')

const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn',function (){
    it('should be a function' , function(){
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    })
    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 
    
    it('should be able to return the user guess',function(){
        const turn = new Turn('squid');
        expect(turn.returnGuess()).to.equal('squid')
    })
    it('should return the currentCard',function(){
        const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('squid',currentCard)
        expect(turn.returnCard()).to.deep.equal(currentCard)
    })
    it('should be able to evaluate user guess correctly if correct',function(){
        const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object',currentCard)
        expect(turn.evaluateGuess()).to.equal(true)
    })
    it('should be able to evaluate userGuess corrctly if incorrect',function(){
        const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('squid',currentCard)
        expect(turn.evaluateGuess()).to.equal(false)
    })
    it('should able to give correct feedback if userGuess is correct',function(){
        const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('object',currentCard)
        expect(turn.giveFeedback()).to.equal('correct!')
    })
    it('should able to give correct feedback if userGuess is incorrect',function(){
        const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        const turn = new Turn('jar',currentCard)
        expect(turn.giveFeedback()).to.equal(`incorrect!`)
    })
})
