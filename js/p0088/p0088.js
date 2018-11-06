// merge sorted array
/* eslint no-param-reassign: 0 */
export default function merge(nums1, m, nums2, n) {
  let index = (m + n) - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
    if (m >= 0 && nums1[m] >= nums2[n]) {
      nums1[index] = nums1[m];
      m -= 1;
    } else {
      nums1[index] = nums2[n];
      n -= 1;
    }
    index -= 1;
  }
}
