const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck');

describe('createDeck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('')
});


// describe('guess', function() {
//     it('should be a function', function() {
//         expect(evaluateGuess).to.be.a('function');
//     });

//     it('should return correct if the guess is the same as the correct answer', function() {
//         const correctAnswer = 'bear'
//         const newGuess = evaluateGuess('bear', correctAnswer)

//         expect(newGuess).to.equal('Correct!')
//     });

//     it('should return incorrect if the guess is not the same as the correct answer', function() {
//         const correctAnswer = 'bear'
//         const newGuess = evaluateGuess('seal', correctAnswer)

//         expect(newGuess).to.equal('Incorrect!')
//     });
// });