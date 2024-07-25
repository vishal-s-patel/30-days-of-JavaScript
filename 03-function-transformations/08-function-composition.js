/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  //Imperative
  /*return function(x) {
        for(const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }*/

  //Declarative
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
