module.exports = verifyPalindrome;

function verifyPalindrome(str) {
  if (str != null && str.length > 1) 
  {
    // Convert accent marks
    var removeAccent = str.normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    // Remove spaces
    var collapsedStr = removeAccent.replace(/\s/g, '');

    // Remove special characters
    var removeSpecial = collapsedStr.replace(/[^a-zA-Z0-9]/g, '')

    // Switch all letters to lowercase
    var forwardLowerCase = removeSpecial.toLowerCase();

    // Reverse the string
    var backwardLowerCase = forwardLowerCase.split('').reverse().join('');

    // Compare forward and backward
    return (backwardLowerCase === forwardLowerCase)
  }
  else 
  {
    return false;
  }
}

