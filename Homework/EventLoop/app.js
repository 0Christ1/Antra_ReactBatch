/*

JS: A single-threaded non-blocking asynchronous concurrent language

stack -> WebAPIs (DOM, ajax, setTimeout) -> callback queue(onClick, onLoad, onDone) -> event loop

the call stack: one thread == one call stack == one thing at a time

*/

// Call stack

// Example 1
/*
stack: main() -> printSquare(4) -> square(n) -> multiply(n, n)
       main() -> printSquare(4) -> square(n) -> pop multiply
       main() -> printSquare(4) -> pop square
       main() -> printSquare(4) -> console.log(squared)
       main() -> printSquare(4)
       main()
       Done
*/
// function multiply(a, b) {
//   return a * b;
// }

// function square(n) {
//   return multiply(n, n);
// }

// function printSquare(n) {
//   var squared = square(n);
//   console.log(squared);
// }
// printSquare(4);

// Example 2
/*
app.js:40 Uncaught Error: Oops!
    at foo (app.js:40:9)
    at bar (app.js:44:3)
    at baz (app.js:48:3)
    at app.js:51:1
*/
// function foo() {
//   throw new Error("Oops!");
// }

// function bar() {
//   foo();
// }

// function baz() {
//   bar();
// }

// baz();

// Example 3
/*
    main()->foo()->foo()->foo()...
 */
// function foo() {
//   return foo();
// }

// foo();

// Blocking
