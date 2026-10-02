const { expect } = require('chai'); // Import Chai's expect function
const { addChar, sqrt, sin, cos, tan, deleteChar, checkNum, exp } = require('../script'); // Import functions from script.js

// Describe block for scientific calculator functions
describe('Scientific Calculator Functions', () => {
    
    // Subgroup for mathematical operations
    describe('Mathematical Operations', () => {

        // Test 1: Square root of a positive number
        it('calculates the square root of a positive number', () => {
            const mockForm = { display: { value: '16' } }; // Input: "16"
            sqrt(mockForm); // Call the square root function
            expect(Number(mockForm.display.value)).to.equal(4); // Expected output: "4"
        });

        // Test 2: Handling invalid input for square root
        it('handles invalid input for square root', () => {
            const mockForm = { display: { value: '-16' } }; // Input: "-16"
            sqrt(mockForm); // Call the square root function
            expect(isNaN(Number(mockForm.display.value))).to.be.true; // Expected output: NaN
        });

        // Test 3: Sine of 0
        it('calculates sin(0) correctly', () => {
            const mockForm = { display: { value: '0' } }; // Input: "0"
            sin(mockForm); // Call the sine function
            expect(Number(mockForm.display.value)).to.equal(0); // Expected output: "0"
        });

        // Test 4: Cosine of 0
        it('calculates cos(0) correctly', () => {
            const mockForm = { display: { value: '0' } }; // Input: "0"
            cos(mockForm); // Call the cosine function
            expect(Number(mockForm.display.value)).to.equal(1); // Expected output: "1"
        });

        // Test 5: Tangent of 45 degrees
        it('calculates tan(45 degrees) correctly', () => {
            const mockForm = { display: { value: (45 * (Math.PI / 180)).toString() } }; // Convert 45 degrees to radians
            tan(mockForm); // Call the tangent function
            expect(Number(mockForm.display.value)).to.be.closeTo(1, 0.01); // Expected output: "1" (approximately)
        });

        // Test 6: Exponential calculation
        it('computes exponential (2^3) correctly', () => {
            const mockForm = { display: { value: '2^3' } }; // Input: "2^3"
            exp(mockForm); // Call the exponential function
            expect(Number(mockForm.display.value)).to.equal(8); // Expected output: "8"
        });
    });

    // Subgroup for input and validation
    describe('Input and Validation', () => {

        // Test 7: Numeric input validation
        it('validates numeric input correctly', () => {
            expect(checkNum("123")).to.be.true;  // Valid numeric input should return true
            expect(checkNum("abc")).to.be.false; // Invalid input (non-numeric) should return false
        });

        // Test 8: Adding characters
        it('adds characters correctly', () => {
            const mockDisplay = { value: '12' }; // Input: "12"
            addChar(mockDisplay, '+5'); // Add "+5" to the display
            expect(mockDisplay.value).to.equal('12+5'); // Expected output: "12+5"
        });

        // Test 9: Deleting characters
        it('handles character deletion correctly', () => {
            const input = { value: "1234" }; // Input: "1234"
            deleteChar(input); // Call the deleteChar function
            expect(input.value).to.equal("123"); // Expected output: "123"
        });
    });
});
