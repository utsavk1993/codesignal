/* Given the string, check if it is a palindrome.
 * Example: For inputString = "aabaa", the output should be solution(inputString) = true;
 * For inputString = "abac", the output should be solution(inputString) = false;
 * For inputString = "a", the output should be solution(inputString) = true
 */

const solution = inputString => {
  let reverseStr = '';
  for(let i = inputString.length - 1; i > -1; i--) {
    reverseStr+= inputString[i];
  }
  
  if(reverseStr === inputString) {
    return true;
  }

  return false;
}
