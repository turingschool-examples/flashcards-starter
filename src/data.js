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
  "correctAnswer": "Object.keys()"
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

module.exports = {
  prototypeData 
}

/*

const javascriptTrivia = [{
  "id": 1,
  "question": "Which HTML element is used for JavaScript?",
  "answers": ["script", "javascript", "JS"],
  "correctAnswer": "script"
}, {
  "id": 2,
  "question": "Which selector will correctly target an element with an id called 'thing'?",
  "answers": [".getElementById('thing')", ".getElementsByIDs(#thing)", ".targetElementsbyID('thing')"],
  "correctAnswer": ".getElementById('thing')"
}, {
  "id": 3,
  "question": "Where should most JavaScript links go in the HTML file.?",
  "answers": ["top of the <body>", "<main>", "bottom of the <body>"],
  "correctAnswer": "bottom of the <body>"
}, {
  "id": 4,
  "question": "What attribute creates the link between the <script> tag and the actual JavaScript file?",
  "answers": ["src=", "file=", "link="],
  "correctAnswer": "src="
}, {
  "id": 5,
  "question": "True or False: All JavaScript files require a <script> tag inside them.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 6,
  "question": "What is the proper syntax to use JavaScript to create an alert box with a message?",
  "answers": ["alert(Hello World)", "alert('Hello World')", "message('Hello World')"],
  "correctAnswer": "alert('Hello World')"
}, {
  "id": 7,
  "question": "True or False: A function declaration begins with the keyword 'function'.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 8,
  "question": "True or False: A function expression begins with the keyword 'expression'.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 9,
  "question": "True or False: (i == 5) is equivalent to (i === 5)",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 10,
  "question": "Which characters are used to make a multiline comments in a JavaScript file?",
  "answers": ["commas and angle brackets", "two single quote marks", "slashes and asterisks"],
  "correctAnswer": "slashes and asterisks"
}, {
  "id": 11,
  "question": "What qualifies as an object in JavaScript?",
  "answers": ["HTML elements", "arrays and objects", "everything"],
  "correctAnswer": "everything"
}, {
  "id": 12,
  "question": "Which JavaScript method returns a number rounded to its nearest integer?",
  "answers": ["Math.round()", "Math.roundUp()", "Math.rnd()"],
  "correctAnswer": "Math.round()"
}, {
  "id": 13,
  "question": "Which JavaScript method returns the smallest integer higher or equal to a number?",
  "answers": ["Math.ceil(x, y)", "Math.ceiling(x, y)", "Math.roundUp(x, y)"],
  "correctAnswer": "Math.ceil()"
}, {
  "id": 14,
  "question": "Which variable styles is function scoped, and not block scoped??",
  "answers": ["var", "let", "const"],
  "correctAnswer": "var"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What is the name of this character in JavaScript: = ",
  "answers": ["assignment operator", "equivalent operator", "variable assignment"],
  "correctAnswer": "assignment operator"
}, {
  "id": 17,
  "question": "Which characters join to come the 'logical or'?",
  "answers": ["&&", "++", "||"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "Which of the following are truthy?",
  "answers": ["Infinity", "truthy", "boolean"],
  "correctAnswer": "Infinity"
}, {
  "id": 19,
  "question": "Which of the following are falsy?",
  "answers": ["boolean", "(new Date())", "undefined"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "Which paradigm uses objects to model real world things that we want to represent inside our programs?",
  "answers": ["object oriented programming", "function oriented programming"],
  "correctAnswer": "false"
}, {
  "id": 21,
    "question": "What term is used for allowing new objects to take on the data and behavior of their parent classes?",
  "answers": ["requirement", "map()", "inheritance"],
  "correctAnswer": "inheritance"
}, {
  "id": 22,
  "question": "Which is preferred practice in object oriented programming, coupled or decoupled functions?",
  "answers": ["coupled", "decoupled", "parent/child"],
  "correctAnswer": "decoupled"
}, {
  "id": 23,
  "question": "True or False: An array is a data structure that allows us to group related information and behaviors into key-value pairs.",
  "answers": ["true", "object", "false"],
  "correctAnswer": "false"
}, {
  "id": 24,
  "question": "True or False: A class is the template for each instance, and each instance is an object based off of the class template",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "When objects of one class inherit or extends many traits from another class, the inheriting classes are called...",
  "answers": ["sub sandwiches", "child classes", "parent classes"],
  "correctAnswer": "child classes"
}, {
  "id": 26,
  "question": "Which keyword is used to access and invoke methods on a parent class?",
  "answers": ["super", "duper", "this.method"],
  "correctAnswer": "super"
}, {
  "id": 27,
  "question": "What is it called when values are scoped to a specific instance of an object?",
  "answers": ["encapsulation", "decoupling", "separation"],
  "correctAnswer": "encapsulation"
}, {
  "id": 28,
  "question": "Which general problem-solving framework involves working backwards from a desired result?",
  "answers": ["trial and error", "heuristic", "reverse engineer"],
  "correctAnswer": "heuristic"
}, {
  "id": 29,
  "question": "When called on to whiteboard a problem, what should be in your non-dominant hand?",
  "answers": ["a second marker", "a turkey club", "an eraser"],
  "correctAnswer": "eraser"
}, {
  "id": 30,
  "question": "What term is used for the tendency to focus on one particular piece of information when making decisions or problem-solving?",
  "answers": ["anchoring bias", "availability bias", "mental set"],
  "correctAnswer": "anchoring bias"
}]

module.exports = {
  javascriptTrivia
}
*/