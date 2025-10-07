// error_instructions.js

/*
    Instructions:
        * Carefully examine the line of code where the error occurred.
        * Pay close attention to punctuation marks, especially semicolons, parentheses, and brackets.
        * Ensure that all statements are properly terminated and that function calls have matching parentheses.
        * Double-check for any missing or extra characters that might be disrupting the code's structure.
    */

// 1. SyntaxError: Unexpected token ';'
let message = "Hello, World!";
console.log(message); 
// added the console.log to display message in the console of the page. 

// 2. ReferenceError: myVariable is not defined
let myVariable = "Pancakes";
console.log(myVariable);
//defined "myVariable" and displayed it inside the console log using console.log()

/*
    Instructions:
        * This error indicates that you're trying to use a variable that hasn't been declared.
        * Look for where the variable should have been declared using `let`, `const`, or `var`.
        * Verify the spelling of the variable name in both the declaration and the usage.
        * Ensure that the variable is declared before it's used.
    */

/*
    Instructions:
        * This error means you're attempting to call a value as if it were a function, but it's not.
        * Identify the value you're trying to call (in this case, `greeting`).
        * Determine the data type of that value.
        * Remember that only functions can be called using parentheses `()`.
        * If you need to use the variable greeting, then use it as a variable, not a function.
    */
// 3. TypeError: greeting is not a function
const greeting = "Hello";
console.log(greeting);
//added the console log to display the greeting variable. 

/*
    Instructions:
        * This error occurs when you try to access a property of a variable that holds `undefined`.
        * Check the value of the variable (`obj` in this case) before accessing its properties.
        * Make sure the variable has been assigned an object before you attempt to access its properties.
        * If you expect the variable to hold an object, you may need to add code that assigns an object to the variable.
    */
   // 4. TypeError: Cannot read property 'property' of undefined
let obj = {
    property: "circle"
};
console.log(obj.property);
//added the variable obj then added the property of it. added console.log to display the variable in the console log. 

/*
    Instructions:
        * When you try to concatenate an object with a string using the `+` operator, JavaScript converts the object to its default string representation, which is `[object Object]`.
        * If you want to display the object's properties, you need to access them individually.
        * Consider using template literals or `JSON.stringify()` to create a string representation of the object.
        * Remember that the console.log() function can take multiple arguments, and will display them all.
    */
// 5. Incorrect Object Concatenation
const user = {
    name: "John",
    age: 30,
};

console.log("User info: "+ JSON.stringify(user));
//added the console log  with + JSON.stringify to display the users name and age into the console log, displaying both at the same time. 


/*
    Instructions:
        * JavaScript performs type coercion when you use the `+` operator with different data types.
        * In this case, it treats the number `5` as a string and concatenates it with the string `"10"`.
        * If you want to perform arithmetic addition, you need to ensure that both operands are numbers.
        * Use functions like `parseInt()` or `parseFloat()` to convert strings to numbers.
        * Be aware that if the string that is being converted to a number, is not a number, then the result will be NaN.
    */
// 6. Casting Failure (Incorrect Type Conversion)
let num = parseInt("10");
console.log(num + 5);
//added the console.log to display thenumbers, added parseInt to let num = to convert it to a number in the code. 
