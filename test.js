// This script uses Node.js's built-in 'assert' module to perform tests.
const assert = require('assert');
const { add } = require('./index.js'); // Import the function to be tested.

console.log('Running tests...');

// Test case 1: Positive numbers
assert.strictEqual(add(1, 2), 3, 'Test Case 1 Failed: Expected 1 + 2 to equal 3');
console.log('Test Case 1 Passed: 1 + 2 === 3');

// Test case 2: Negative numbers
assert.strictEqual(add(-1, -2), -3, 'Test Case 2 Failed: Expected -1 + -2 to equal -3');
console.log('Test Case 2 Passed: -1 + -2 === -3');

// Test case 3: Zero
assert.strictEqual(add(5, 0), 5, 'Test Case 3 Failed: Expected 5 + 0 to equal 5');
console.log('Test Case 3 Passed: 5 + 0 === 5');

// Test case 4: Floating point numbers
assert.strictEqual(add(0.1, 0.2), 0.30000000000000004, 'Test Case 4 Failed: Expected 0.1 + 0.2 to equal 0.3');
console.log('Test Case 4 Passed: 0.1 + 0.2 === 0.3');

console.log('All tests passed!');
