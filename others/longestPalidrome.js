/*
  https://leetcode.com/problems/longest-palindromic-substring/description/

  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

function isPalidrome(str) {
	var strReverse = str.split("").reverse().join("");
  return strReverse === str;
}

function palidrome(str) {
	var maxPalidrome = '';
  for (var i = 0; i < str.length; i++) {
  	var subStr = str.substr(i, str.length);
    for (var j = subStr.length; j > 0; j--) {
    	var sub = subStr.substr(0, j);
      if(isPalidrome(sub) && maxPalidrome.length < sub.length) {
      	maxPalidrome = sub;
      }
    }
  }
  return maxPalidrome;
}

console.log(palidrome('gdjkrfnabcbadkjenf jkknkn knjnkn abcdefgfedcbakjefjkgkbrg'));