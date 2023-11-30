const chai = require ('chai');
const expect = chai.expect;
const { evaluateGuess } = require('../src/turns.js')

describe("evaluateGuess function", () => {
    it("Should evaluate if a guess to a flashcard is correct.", () => {
        const result = evaluateGuess("object", "array")

        expect(result).to.equal("Incorrect!")
    })

    it("Should evaluate if a guess to a flashcard is incorrect.", () => {
        const result = evaluateGuess("array", "array")

        expect(result).to.equal("Correct!")
    })

    it("Should not matter if a guess uppercase or lowercase.", () => {
        const result1 = evaluateGuess("Array", "array") 
        const result2 = evaluateGuess("fitzGerald", "fitzgerald")

        expect(result1).to.equal("Correct!")
        expect(result2).to.equal("Correct!")
    })

    it("Should check if guess is empty.", () => {
        let guess = ""
        let correctAnswer = "object"
        const result = evaluateGuess(guess, correctAnswer) 
       
        expect(result).to.equal("Please choose an answer")
    })
})