### Expected Behavior


### Issues Resolved


### Code Reviewers
@

### Style and Implementation
- There are no global variables aside from query selectors
- Application uses event delegation correctly on dynamic elements
- All functions strictly adhere to the [Single Responsibility Principle (SRP)](https://dev.to/skill_pathway/single-responsibility-principle-for-dummies-59gb) and are all 10 lines of code or less
- Uses logical operators instead of nesting conditional statements
- Conditionals are written in a way that demonstrates an understanding of [https://frontend.turing.io/lessons/module-1/js-truthy-falsy-expressions.html](truthy/falsy values). For example, the developer avoids using logic like <code class="language-plaintext highlighter-rouge">=== true</code> and <code class="language-plaintext highlighter-rouge">!== 0</code>.
- Demonstrate understanding of DOM manipulation by adding, removing, and updating elements on the DOM, after the page has loaded
- Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and observe [SRP](https://dev.to/skill_pathway/single-responsibility-principle-for-dummies-59gb) - and most are around 10 lines of code or less
- Most functions and variables are semantically and concisely named. Functions should start with a verb, array names should be plural, etc. Function and variable names describe their role in the program. Examples: The name of the data type should not ever be in a variable name (ex: “petArray”); the name itself should be clear enough to indicate the type of data it holds (ex: “allPets” or “pets”).
- An event handler should not have the word “handler” in the name (ex: “clickHandler”); the name should indicate the handler’s purpose (ex: “addNewPet”).
- Uses parameters and arguments to craft short and reusable functions. There are no parameters or arguments in functions that are unused.
- Whenever possible, function declarations are used over anonymous functions in event listeners. There should be no logic present in an event listener.
- All console logs, debuggers and comments are removed from code before submitting.
- Uses named functions instead of anonymous functions as event handlers in event listeners.
- Correctly uses if/else statements to handle multiple paths of logic & error handling.