'use strict'

for (let i = 0; i < 100; i++) {

  let str = i;

  if (i % 3 === 0) {
    str += " Fizz";
  }
  if (i % 5 === 0) {
    str += " Buzz";
  }

  console.log(str);
}
