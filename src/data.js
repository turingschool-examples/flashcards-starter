/* eslint-disable */
const prototypeData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 4,
  "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "accessor method"
}, {
  "id": 5,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
}, {
  "id": 6,
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correctAnswer": "sort()"
}, {
  "id": 7,
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correctAnswer": "splice()"
}, {
  "id": 8,
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correctAnswer": "callback function"
}, {
  "id": 9,
  "question": "What does the callback function for find() return?",
  "answers": ["boolean", "array", "object"],
  "correctAnswer": "boolean"
}, {
  "id": 10,
  "question": "Which iteration method returns the first array element where the callback function returns true",
  "answers": ["find()", "filter()", "forEach()"],
  "correctAnswer": "find()"
}, {
  "id": 11,
  "question": "Which iteration method returns a new array with all elements that match a given condition?",
  "answers": ["filter()", "find()", "map()"],
  "correctAnswer": "filter()"
}, {
  "id": 12,
  "question": "Which iteration method returns an array of the same length as the original array?",
  "answers": ["map()", "forEach()", "reduce()"],
  "correctAnswer": "map()"
}, {
  "id": 13,
  "question": "The callback function for map() returns a modified version of the current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 14,
  "question": "Which iteration method can turn an array into a single value of any data type?",
  "answers": ["reduce()", "map()", "filter()"],
  "correctAnswer": "reduce()"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What does the callback function for reduce() return?",
  "answers": ["the accumulator", "the current element", "the initializer"],
  "correctAnswer": "the accumulator"
}, {
  "id": 17,
  "question": "What does the reduce() method take in?",
  "answers": ["callback function and initializer", "callback function and current element", "callback function and accumulator"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "What does the callback function for the map() method take in?",
  "answers": ["current element", "initializer", "boolean"],
  "correctAnswer": "current element"
}, {
  "id": 19,
  "question": "What does the callback function for filter() return?",
  "answers": ["boolean", "an array of the same length", "a single value of any data type"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "forEach() returns an array",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 21,
  "question": "Which iteration method is best for DOM manipulation?",
  "answers": ["forEach()", "map()", "reduce()"],
  "correctAnswer": "forEach()"
}, {
  "id": 22,
  "question": "Which prototype method is used to iterate over each property of an object?",
  "answers": ["Object.keys()", "Object.values()", "reduce()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 23,
  "question": "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?",
  "answers": ["Object.assign()", "Object.keys()", "filter()"],
  "correctAnswer": "Object.assign()"
}, {
  "id": 24,
  "question": "Object.assign() can take in an indefinite amount of arguments",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "Arrays are specialized objects where the keys are ordered numbers.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "shift(), unshift(), pop(), and push() are examples of what type of array property method?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 27,
  "question": "Accessor methods permanently modify the original array, mutator methods do not.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 28,
  "question": "Which prototype method returns an array of an object's property values?",
  "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
  "correctAnswer": "Object.values()"
}, {
  "id": 29,
  "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 30,
  "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
  "answers": ["prototype method", "object", "callback function"],
  "correctAnswer": "prototype method"
}]
/* eslint-enable */

const dataTypesData = [{
  "id": 1,
  "question": "What is an example of a primitive data type?",
  "answers": ["object", "array", "string"],
  "correctAnswer": "string"
}, {
  "id": 2,
  "question": "What is an example of a complex data type?",
  "answers": ["number", "array", "boolean"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What is each item in an array called?",
  "answers": ["element", "index", "property"],
  "correctAnswer": "element"
}, {
  "id": 4,
  "question": "What do we call the position within an array at which an element resides?",
  "answers": ["key", "index", "value"],
  "correctAnswer": "index"
}, {
  "id": 5,
  "question": "What index number corresponds to the first element of the array?",
  "answers": ['0', '1'],
  "correctAnswer": '0'
}, {
  "id": 6,
  "question": "How many elements can an array contain?",
  "answers": ["10", "100", "unlimited"],
  "correctAnswer": "unlimited"
}, {
  "id": 7,
  "question": "Is it generally accepted for the same array to contain elements of different data types?",
  "answers": ["yes", "no"],
  "correctAnswer": "no"
}, {
  "id": 8,
  "question": "What is it called when you have an array within an array?",
  "answers": ["array stacking", "nesting", "data mining"],
  "correctAnswer": "nesting"
}, {
  "id": 9,
  "question": "What symbol do we use to denote an array?",
  "answers": ["[]", "{}", "()"],
  "correctAnswer": "[]"
}, {
  "id": 10,
  "question": "What symbol do we use to denote an object?",
  "answers": ["[]", "{}", "()"],
  "correctAnswer": "{}"
}, {
  "id": 11,
  "question": "It is possible to nest an object inside an array.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 12,
  "question": "It is possible to nest an array inside an object.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 13,
  "question": "What are the properties of an object called?",
  "answers": ["key", "value", "variable"],
  "correctAnswer": "key"
}, {
  "id": 14,
  "question": "How can we access the value of a specific key-value pair?",
  "answers": ["concatenation", "dot notation", "interpolation"],
  "correctAnswer": "dot notation"
}, {
  "id": 15,
  "question": "It is possible to nest an object within an object",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What is the result if you add the string of 'Hello' to the number 5?",
  "answers": ["undefined", "NaN", "'Hello5'"],
  "correctAnswer": "'Hello5'"
}, {
  "id": 17,
  "question": "What is it called when the javascript interpreter automaticlly changes the data type of a number?",
  "answers": ["interpolation", "concatenation", "type-coersion"],
  "correctAnswer": "type-coersion"
}, {
  "id": 18,
  "question": "What do we call functions that perform a certain action with an array?",
  "answers": ["functions", "methods", "iterators"],
  "correctAnswer": "methods"
}, {
  "id": 19,
  "question": "Which method will remove an element from an array?",
  "answers": ["pop()", "unshift()", "push()"],
  "correctAnswer": "pop()"
}, {
  "id": 20,
  "question": "Which method will add an element to an array?",
  "answers": ["shift()", "push()", "slice()"],
  "correctAnswer": "push()"
}, {
  "id": 21,
  "question": "Which method can add OR remove an element from an array?",
  "answers": ["unshift()", "splice()", "reverse()"],
  "correctAnswer": "splice()"
}, {
  "id": 22,
  "question": "When using pop() to remove an element from an array, at which index will the element be removed?",
  "answers": ["the first index of the array", "you can choose the index by putting a number in the ()", "the last index of the array"],
  "correctAnswer": "the last index of the array"
}, {
  "id": 23,
  "question": "When using the splice() method, what does the first parameter represent?",
  "answers": ["the index position at which the method will begin", "the number of elements to be removed", "the element that you want to add to the array"],
  "correctAnswer": "the index position at which the method will begin"
}, {
  "id": 24,
  "question": "The splice() method will always remove an element from the array",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 25,
  "question": "It is possible to use dot notation OR bracket notation to access key-value pairs within objects.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "Bracket notation is generally more dynamic than dot notation",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 27,
  "question": "The unshift() method will add an element to the front of the array, changing the index position of every other element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 28,
  "question": "What method should we use if we want to add an element to an array at a specific index position?",
  "answers": ["shift()", "splice()", "push()"],
  "correctAnswer": "splice()"
}, {
  "id": 29,
  "question": "The split() method can be used on an array.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 30,
  "question": "The join() method can be used on an array.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}]

games = {
  prototype: prototypeData,
  dataTypes: dataTypesData
}


module.exports = {
  games 
}