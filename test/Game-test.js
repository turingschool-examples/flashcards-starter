const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Game', function() {

    it('should be a function', function() {
        const game = new Game()
        expect(Game).to.be.a('function')
    });

    it('should be an instance of Game', function() {
        const game = new Game()
        expect(game).to.be.an.instanceof(Game)
    }); 

    it('should create cards', function() {
        const game = new Game()
        game.test()
        expect(game.cards.length).to.equal(5)
    }); 

    it('should put cards in a deck', function() {
        const game = new Game()
        game.test()
        expect(game.deck).to.be.a('object')
    }); 

    it('should start a new round using deck', function() {
        const game = new Game()

    })

    it('should invoke print message', function() {
        const game = new Game()
        game.test()
        game.test2()
        expect(game.printMessage()).to.equal('printed')
    })

    it('should invoke print question', function() {
        const game = new Game()
        game.test()
        game.test2()
        expect(game.printQuestion()).to.equal('printed')
    })

  })