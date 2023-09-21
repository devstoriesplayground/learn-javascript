/* loops are used to repeat a block of code.

1. The initialExpression initializes and/or declares variables and executes only once.
2. The condition is evaluated.
      *If the condition is false, the for loop is terminated.
      *If the condition is true, the block of code inside of the for loop is executed.
3. The updateExpression updates the value of initialExpression when the condition is true.
4. The condition is evaluated again. This process continues until the condition is false */

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}