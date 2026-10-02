# JavaScript Scientific Calculator

A browser-based scientific calculator built with **HTML, CSS and JavaScript**.

The application provides standard arithmetic controls together with square root, logarithm, trigonometric functions, exponential calculation, squaring, percentage input, sign changes, parentheses, π insertion and character deletion.

The repository also preserves the original automated test file written with **Mocha/Chai-style assertions**.

All original source and test files are preserved unchanged.

## Features

The calculator interface includes:

- numeric input from `0` to `9`;
- addition;
- subtraction;
- multiplication;
- division;
- parentheses;
- decimal values;
- π insertion;
- percentage input;
- positive/negative sign switching;
- character deletion;
- clear/reset;
- expression evaluation;
- square;
- square root;
- natural logarithm;
- sine;
- cosine;
- tangent;
- exponential calculation.

## User Interface

The calculator is implemented as an HTML form containing a table-based button layout.

The display uses:

```html
<input id="display" name="display" ...>
```

The interface groups controls into several visual button classes:

```text
btnTop
btnNum
btnMath
btnOpps
```

The supplied stylesheet defines:

- a blue page background;
- calculator border and shadow;
- black display panel;
- green display text;
- separate button colours for numeric, mathematical and scientific controls.

## Core JavaScript Functions

### `addChar(input, character)`

Appends a selected digit, operator or symbol to the calculator display.

If the current display is `0`, it replaces the existing value.

### `deleteChar(input)`

Removes the final character from the current display value.

### `changeSign(input)`

Switches the displayed value between positive and negative form.

### `compute(form)`

Evaluates the expression currently shown in the calculator display.

The original implementation uses:

```javascript
eval(form.display.value)
```

This behaviour is preserved exactly as submitted.

### `square(form)`

Squares the current expression by evaluating it and multiplying the result by itself.

### `sqrt(form)`

Uses:

```javascript
Math.sqrt(...)
```

to calculate the square root of the current display value.

### `ln(form)`

Uses:

```javascript
Math.log(...)
```

for the natural logarithm.

### `sin(form)`

Uses:

```javascript
Math.sin(...)
```

### `cos(form)`

Uses:

```javascript
Math.cos(...)
```

### `tan(form)`

Uses:

```javascript
Math.tan(...)
```

The JavaScript trigonometric functions operate in radians.

### `exp(form)`

The original implementation uses:

```javascript
Math.exp(form.display.value)
```

This computes the natural exponential function `e^x`.

### `percent(input)`

Stores the current display value and appends a `%` symbol.

The source also contains commented-out percentage-processing logic inside `compute()`.

### `checkNum(str)`

Validates the expression by checking whether each character is:

- a digit;
- `/`;
- `*`;
- `+`;
- `-`;
- `.`;
- `(`;
- `)`;
- `%`.

Any other character triggers the original:

```text
invalid entry!
```

alert and returns `false`.

## Scientific Controls

The HTML interface exposes the following scientific controls:

```text
π
x^
ln
√
x²
cos
sin
tan
```

The `π` button inserts:

```text
3.14159265359
```

directly into the display.

## Automated Tests

The original project contains:

```text
test/test.js
```

The test suite imports calculator functions from `script.js` using CommonJS:

```javascript
const {
  addChar,
  sqrt,
  sin,
  cos,
  tan,
  deleteChar,
  checkNum,
  exp
} = require('../script');
```

The test file covers:

- square root of a positive value;
- square root of a negative value;
- sine of zero;
- cosine of zero;
- tangent of 45 degrees after conversion to radians;
- exponential calculation;
- numeric validation;
- adding characters;
- deleting characters.

## Original Test/Implementation Inconsistency

One supplied test is named:

```text
computes exponential (2^3) correctly
```

and passes:

```text
2^3
```

to the `exp()` function while expecting:

```text
8
```

However, the original `exp()` implementation calls:

```javascript
Math.exp(form.display.value)
```

`Math.exp()` calculates `e^x`; it does not evaluate a power expression such as `2^3`.

As a result, this individual test does not match the submitted implementation.

This inconsistency is **documented rather than corrected** so the original coursework source and test behaviour remain unchanged.

## Running the Calculator

No build system is required for the calculator itself.

Open:

```text
index.html
```

in a browser, or run it from a local server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Running the Tests

The original tests use Mocha and Chai.

A support `package.json` is included in this repository so the preserved test suite can be installed and run without modifying the original source.

Install dependencies:

```bash
npm install
```

Run the original tests:

```bash
npm test
```

The documented `exp()` test inconsistency above is expected to affect that test unless the original implementation or original test is changed.

Neither has been modified in this repository.

## Repository Structure

```text
scientific-calculator-javascript/
├── README.md
├── .gitignore
├── ORIGINAL_FILES_VERIFIED.txt
├── package.json
├── index.html
├── script.js
├── style.css
└── test/
    └── test.js
```

## Technologies

- HTML
- CSS
- JavaScript
- browser DOM events
- JavaScript `Math` API
- CommonJS exports
- Mocha-style testing
- Chai assertions

## Original-File Preservation

The original project consists of:

```text
index.html
script.js
style.css
test/test.js
```

All four files were copied byte-for-byte from the supplied project archive and verified using SHA-256.

No original calculator or test implementation was edited.

Only repository-support files were added:

```text
README.md
.gitignore
ORIGINAL_FILES_VERIFIED.txt
package.json
```

Operating-system metadata such as `.DS_Store` is excluded.

## Author

**Zimmel Javed Virk**  
BSc Computer Science — University of London
