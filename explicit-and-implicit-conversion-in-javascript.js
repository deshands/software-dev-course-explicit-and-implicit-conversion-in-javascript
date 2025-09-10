/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

//Fix: Explicit check using string comparison,or convert correctly.
let isValid = ("false" === "true");  //This makes it fasle 
if (isValid) {
    console.log("This is valid!");
} else {
  console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //Explicity convert ti a number
console.log("Total Age after fix: " + totalAge);

//---------Part 2: My Own Examples ---------

//Implicit conversion example
//"10" * 2 implicitly converts "10" to number
let implicitExample = "10" * 2;
console.log("Implicit Example (\"10\" * 2):", implicitExample);

//Explicit conversion example
let explicitExample = String(123); // number -> string
console.log("Explicit Example (Number to String):", explicitExample);
// Edge case: NaN with explicit conversion
let edgeCase = Number("hello"); // "hello" cannot be converted to a number
console.log("Edge Case (Number(\"hello\")):", edgeCase); // NaN