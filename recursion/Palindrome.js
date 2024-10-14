function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove spaces and punctuation
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
  