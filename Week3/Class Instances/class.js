// Return "Good Morning" when passed a 3 or a multiple thereof
// Return "Good Afternoon" when passed a 7 or a multiple thereof
// Return "Good Evening" when passed a multiple of 3 and 7
// If the number is neither a multiple of 3 or 7 return that number as a string
// If any data type other than a number is passed return an error message.
// You should instantiate multiple instances of your class in your other .js file to prove your different test cases.

module.exports = class MyClass {
    constructor(x) {
      this.x = x;
    }
  
    testCase() {
      if (this.x % 3 == 0 && this.x % 7 == 0) {
        console.log("Good Evening");
      } 
      else if (this.x % 7 == 0) {
        console.log("Good Afternoon");
      } 
      else if (this.x % 3 == 0) {
        console.log("Good Morning");
      } 
      else if (typeof this.x != "number") {
        console.log("ERROR!! Enter a new number.");
      } 
      else if (this.x % 3 != 0 && this.x % 7 != 0) {
        console.log("Converting number to a string" + String(this.x));
      }
    }
  };