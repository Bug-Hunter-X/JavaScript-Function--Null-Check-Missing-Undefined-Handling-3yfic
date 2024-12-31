# JavaScript Null Check Bug

This repository demonstrates a common error in JavaScript: neglecting to check for both `null` and `undefined` values. The `bug.js` file showcases the problematic function, which only checks for `null`.  The `bugSolution.js` file provides the corrected version.

## Problem

The original function `foo` only handles `null` values explicitly. If either `a` or `b` are `undefined`, the function proceeds without proper handling, leading to potential errors or unexpected output.

## Solution

The solution in `bugSolution.js` addresses this by explicitly checking for both `null` and `undefined` values using the loose equality operator (`==`) or a combination of strict equality (`===`) and type checking (`typeof`).

## How to reproduce the bug

1. Clone this repository.
2. Run `bug.js` with different inputs, including undefined or null values for 'a' or 'b'. Observe the different outcomes depending on the input.

## How to fix the bug

1. Refer to the `bugSolution.js` for the corrected implementation.
2. Ensure your code uses the appropriate null and undefined checks based on your function's requirements.
