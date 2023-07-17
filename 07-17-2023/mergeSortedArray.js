/*
p:taking 2 arrays, and m for elems to be merges, and n elems to be ignored
r: return arr
ep:
    define pointers because we'll move backwards
    i = m-1
    j = n - 1
    k = m+n - 1

*/
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1, starting from the last valid element
  let j = n - 1; // Pointer for nums2, starting from the last element
  let k = m + n - 1; // Pointer for the merged array, starting from the last position

  // Compare and place elements until one of the arrays is exhausted

  // sorting alg descending from k
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      // If the current element in nums1 is greater, place it in the merged array
      nums1[k] = nums1[i];
      i--;
    } else {
      // If the current element in nums2 is greater, place it in the merged array
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // because nums1 also has set length, on chance remain chars left, iterate through and decrement both j and k
  // If there are remaining elements in nums2, copy them to the merged array
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
