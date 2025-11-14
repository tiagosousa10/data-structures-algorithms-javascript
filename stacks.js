//stacks

//functions: push, pop, peek, length

//push: adds to the top of the stack
//pop: removes from the top of the stack
//peek: looks at the top of the stack
//length: returns the length of the stack

var letters = [];

var word = "racecar";

var rword = "";

//adds each letter to the stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//removes each letter from the stack and adds it to rword
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + "is a palindrome");
} else {
  console.log(word + "is not a palindrome");
}
//---------------------------------

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
    //adds value to the stack
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };

    //removes and returns the value at the end of the stack
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }

      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    this.size = function () {
      return this.count;
    };

    //returns the value at the end of the stack
    this.peek = function () {
      return this.storage[this.count - 1];
    };
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("FreeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
