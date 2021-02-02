const chai = require('chai');
const Turn = require('../src/Turn');
const expect = chai.expect;

// const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it(`Should be a function`, function() {
        const turn = new Turn();
        expect(Turn).to.be.a(`function`);
    });

    it(`should be an instance of Card`, function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it(`should store a guess`, function() {
        const card = new Card((3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"))
        const turn = new Turn("mutator method", card)
        expect(turn.guess).to.equal('mutator method');
    })

    it(`should store a card`, function() {
        const card = new Card((3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"))
        const turn = new Turn("mutator method", card);
        expect(turn.card).to.equal(card);
    })

    it(`should return a guess`, function() {
        const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const turn = new Turn('accessor method', card);
        expect(turn.returnGuess()).to.equal('accessor method');
    })

    it(`should return the card`, function() {
        const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const turn = new Turn('accessor method', card);
        expect(turn.returnCard()).to.equal(card);
    })

    
});



// it('should be a function', function() {
//     const card = new Card();
//     expect(Card).to.be.a('function');
//   });

//   it('should be an instance of Card', function() {
//     const card = new Card();
//     expect(card).to.be.an.instanceof(Card);
//   }); 

//   it('should store a question', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
//   });  

//   it('should store a list of possible answers', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.answers).to.deep.equal(['object', 'array', 'function']);
//   });  

//   it('should store the correct answer', function() {
//     const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
//     expect(card.correctAnswer).to.equal('object');
//   });