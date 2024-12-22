# TypeScript Optional Parameter Unexpected Behavior

This repository demonstrates an uncommon but potential issue with optional parameters in TypeScript.  When an optional parameter is omitted or explicitly passed as `undefined`, the function executes without error, but prints `undefined`, potentially leading to unexpected behavior in your application.

The `bug.ts` file shows the problematic code. The `bugSolution.ts` file offers a solution using default parameters or input validation.