const { expect } = require("chai");
const { createCard } = require("../src/card");
const { createDeck, countCards } = require("../src/deck")

describe('Deck', function(){
    it('should create a deck of cards', function(){
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")

    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")

    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    const card4 = createCard(4, "hat type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")

    const card5 = createCard(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

    const card6 = createCard(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")

    const card7 = createCard(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")

    const card8 = createCard(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")

    const card9 = createCard(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")

    const card10 = createCard(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()")

    const deck = createDeck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10])

    
    expect(deck).to.deep.equal([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10])
    })
})

describe('Countcards', function(){
    it('Should count the total amount of cards in a deck', function(){

    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")

    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")

    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    const card4 = createCard(4, "hat type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")

    const card5 = createCard(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

    const card6 = createCard(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")

    const card7 = createCard(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")

    const card8 = createCard(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")

    const card9 = createCard(9, "What does the callback function for find() return?", ["boolean", "array", "object"], "boolean")

    const card10 = createCard(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()")

    const deck = createDeck([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10])

    expect(countCards(deck)).to.equal(10)
    })
})