const cards = require('../src/data')
const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn } = require('../src/round');

describe('round', function () {
  it('should start a round', function(){
    const deck = createDeck()
    

    expect(round.deck).to.be.an({});
    expect(round.currentCard).to.equal('currentCard');
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.equal([])
    
  })
})