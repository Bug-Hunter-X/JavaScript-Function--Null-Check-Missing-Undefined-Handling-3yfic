function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }

  // ... rest of your function
}
//Alternative using strict equality and typeof
function foo(a, b) {
  if ((a === null || a === undefined) || (b === null || b === undefined)) {
    return 0; // Handle null or undefined values
  }

  // ... rest of your function
} 