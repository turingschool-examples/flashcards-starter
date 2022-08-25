const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe ('Deck', function(){
  let card
  let card2
  let card3
  let card4
  let deck

  beforeEach(() => {
    card = new Card(1, 'What is the name of Beths dog?', ['Doug', 'Fido', 'Buddy', 'Jimmy'], 'Jimmy')
    card2 = new Card(2, 'What is the name of Hunters cat?', ['Mittens', 'Tiger', 'Rex', 'Socks' ], 'Rex')
    card3 = new Card(3, 'What is the name of Hazels dog?', ['Rocky', 'Rogue', 'Ang', 'Zuko'], 'Rogue')
    card4 = new Card(4, 'What is the name of Lanas dog?', ['Apollo', 'Moon', 'Pluto', 'Comet'], 'Apollo')
    deck = new Deck([card, card2, card3, card4])
  })

  it('should be a function', function(){
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of', function(){
    expect(deck).to.be.a.instanceof(Deck)
  })

  it('should be able to count the amount of cards', function(){
    expect(deck.countCards()).to.equal(4)
  })

})
