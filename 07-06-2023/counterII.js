/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

pseudocode:look above lol
*/

function createCounter(init) {
  let currentVal = init;

  return {
    increment: function () {
      currentVal++;
      return currentVal;
    },
    decrement: function () {
      currentVal--;
      return currentVal;
    },
    reset: function () {
      currentVal = init;
      return currentVal;
    },
  };
}

// also solved via

function createCounter(init) {
  let i = init;

  function increment() {
    return ++init;
  }
  function decrement() {
    return --init;
  }
  function reset() {
    init = i;
    return init;
  }
  return { increment, decrement, reset };
}
