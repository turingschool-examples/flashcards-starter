class Card {
    constructor(index) {
        this.id = prototypeData[index].id; 
        this.question = prototypeData[index].question; 
        this.possibleAnswers = prototypeData[index].answers;
        this.correctAnswer = prototypeData[index].correctAnswer 
        //We want to use our protype data which is an array of objects
        //for each element in the array the card should be the 
    }
}