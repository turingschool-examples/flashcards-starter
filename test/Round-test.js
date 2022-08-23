const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/turn')
const Round = require('..src/Round')

describe('Round', function(){
  let card
  let card2
  let card3
  let card4
  let deck
  let round
  let turn

  beforeEach(() =>{
    card = new Card(1, 'What is the name of Beths dog?', ['Doug', 'Fido', 'Buddy', 'Jimmy'], 'Jimmy')
    card2 = new Card(2, 'What is the name of Hunters cat?', ['Mittens', 'Tiger', 'Rex', 'Socks' ], 'Rex')
    card3 = new Card(3, 'What is the name of Hazels dog?', ['Rocky', 'Rogue', 'Ang', 'Zuko'], 'Rogue')
    card4 = new Card(4, 'What is the name of Lanas dog?', ['Apollo', 'Moon', 'Pluto', 'Comet'], 'Apollo')
    deck = new Deck([card, card2, card3, card4])
    round = new Round(deck)
    turn = new Turn('Jimmy', card)
  })
  
})
