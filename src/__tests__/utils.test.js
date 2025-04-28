// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('should return true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('should return true for a palindrome word with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  test('should throw an error if the string contains non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar!')).toThrow('Input must only contain alphabetic characters');
  });
});
