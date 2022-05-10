const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

const Turns = require('../src/Turns');

// describe('Turns', () => {
//     it('should be a function', () => {
//         expect(Turns).to.be.a('function');
//     })
//     it('should instantiate of Turns', () => {
//         expect(turn1).to.be.a.instanceof(Turns);
//     })
// })

describe('Turns', () => {

    it('should be a function', () => {
        expect(Turns).to.be.a('function');
    })

    it('should instantiate of Turns', () => {
        const turns = new Turns('string', card )
        const card = new Card()
        expect(turns).to.be.an.instanceof(Turns);
});
})