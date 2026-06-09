# compound-interest-js

A small JavaScript program that calculates compound interest for a fixed principal amount, interest rate, compounding frequency, and time period.

## What it does

- Uses the compound interest formula: `A = P * (1 + r/n)^(n*t)`
- Logs the final amount after the specified number of years

## How to run

1.IN vs cose click on Go live.
2. You broswer will open,now right click and then click on inspect.
3.click on console.
4. You should see output like:
   ```text
   The compound interst after 3 year is: 106120
   ```

## Troubleshooting

- If `node --version` fails, install Node.js from https://nodejs.org and try again.
- If you are in the wrong folder, the terminal will say `Cannot find module`. Make sure you are in `e:\2026\day15\js`.
- If the terminal shows a syntax error, open `script.js` and verify the file contents.

## Script details

- `script.js` contains the input values:
  - `p` = principal amount
  - `r` = annual interest rate (as decimal)
  - `n` = number of compounding periods per year
  - `t` = number of years
- The output is the compound interest amount after `t` years.

## Console method

- The script uses `console.log(...)` to print text and values to the terminal.
- Example:
  ```js
  console.log("The compound interst after 3 year is:", A);
  ```
- `console.log` shows the message on the terminal when you run `node script.js`.

## Example

With the current values in `script.js`, the program calculates compound interest for:

- Principal: `100000`
- Rate: `2%`
- Compounded: `2` times per year
- Years: `3`

And prints the final amount.
# compound-interest-js
