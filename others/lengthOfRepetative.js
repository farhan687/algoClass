

function lengthOfSubstring(str) {
  var singleChars = {};
  for (var i = 0; i < str.length; i ++) {
		var char = str[i];
  	if (singleChars[char]) return i;
    singleChars[char] = true;
  }
  return str.length;
}

console.log(lengthOfSubstring("abcabc"));