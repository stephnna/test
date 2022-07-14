const stringLength = require('./string-length')
const reverseString = require('./reverse-string')
const Calculator = require('./calculator')
const capitalize = require('./capitalize')

describe('my string', () => {
test('string length', () => {
  expect(stringLength('vvvvvvvv'))   
});

test('reverse string', () => {
  expect(reverseString('oby')).toMatch('ybo')   
});

test('capitalize string', () => {
  expect(capitalize('microverse')).toMatch('MICROVERSE')   
});
});

describe('my calculator', () => {
  const mycal = new Calculator(); 
  test('add 1 + 2 to equall 3', () => {    
    expect(mycal.add(1, 2)).toBe(3)   
  }); 
  test('add 5 - 3 to equall 3', () => {    
    expect(mycal.subtract(5, 3)).toBe(2)   
  }); 
  test('add 7 * 2 to equall 14', () => {    
    expect(mycal.multiply(7, 3)).toBe(21)   
  }); 
  });



