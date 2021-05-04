// IMPORT MODULES under test here:
import { checkForYes } from '../utils.js';
import { checkForNo } from '../utils.js';

const test = QUnit.test;

test('confirms if answer starts with "y"', (expect) => {
    const expected = true;  
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('anything NOT starting with "y"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkForYes('nope');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});