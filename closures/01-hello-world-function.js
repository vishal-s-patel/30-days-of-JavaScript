//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  //Function syntax
  return function (...args) {
    return "Hello World";
  };

  //Arrow syntax
  //return () => "Hello World";

  //Arrow syntax + rest arguments
  //return (...args) => "Hello World";
};

var fn = createHelloWorld();

console.log(fn());
