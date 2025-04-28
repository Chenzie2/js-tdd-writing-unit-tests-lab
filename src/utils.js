function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (word === '') {
      return false; // Handle the empty string case separately
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must only contain alphabetic characters');
    }
  
    // Convert to lowercase to make the function case-insensitive
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    return normalizedWord === reversedWord;
  }
  
  module.exports = { isPalindrome };
  
  