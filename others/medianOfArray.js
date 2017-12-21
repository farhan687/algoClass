/*
  https://leetcode.com/problems/median-of-two-sorted-arrays/description/

  There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  Example 1:
  nums1 = [1, 3]
  nums2 = [2]

  The median is 2.0
  Example 2:
  nums1 = [1, 2]
  nums2 = [3, 4]

  The median is (2 + 3)/2 = 2.5
*/

function medianOfArray(arr1, arr2) {
  var arr = [];
  var pointer1 = 0;
  var pointer2 = 0;
  var median = 0;
 	while(pointer1 < arr1.length || pointer2 < arr2.length) {
  	if (pointer1 === arr1.length) {
    	arr.push(arr2[pointer2]);	
    	pointer2++;
    }
    else if (pointer2 === arr2.length) {
    	arr.push(arr1[pointer1]);	
    	pointer1++;
    }
    else if (arr1[pointer1] > arr2[pointer2]) {
			arr.push(arr2[pointer2]);	
    	pointer2++;	
    } else {
    	arr.push(arr1[pointer1]);	
    	pointer1++;	
    }
  }
  console.log(arr);
	if (arr.length % 2 === 0) {
  	var medianIndice = arr.length / 2;
    median = (arr[medianIndice - 1] + arr[medianIndice]) / 2;
  }
  else {
    median = arr[Math.ceil(arr.length / 2)];
  }
  return median
}

console.log(medianOfArray([2,4,10], [1,2,3, 4, 5, 6, 7]));
console.log(medianOfArray([1, 2], [3, 4]));