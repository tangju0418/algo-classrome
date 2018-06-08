package p0004

// time O(lg(m+n))
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	len1, len2 := len(nums1), len(nums2)
	s := len1 + len2
	if s%2 == 1 {
		return float64(findKth(nums1, nums2, s/2+1))
	}

	return float64(findKth(nums1, nums2, s/2)+findKth(nums1, nums2, s/2+1)) / 2
}

func minInt(x int, y int) int {
	if x > y {
		return y
	}

	return x
}

func findKth(nums1 []int, nums2 []int, k int) int {
	len1, len2 := len(nums1), len(nums2)
	if len1 > len2 {
		return findKth(nums2, nums1, k)
	}
	if len1 == 0 {
		return nums2[k-1]
	}
	if k == 1 {
		return minInt(nums1[0], nums2[0])
	}

	x := minInt(k/2, len1)
	y := k - x
	if nums1[x-1] < nums2[y-1] {
		return findKth(nums1[x:], nums2, k-x)
	} else if nums1[x-1] > nums2[y-1] {
		return findKth(nums1, nums2[y:], k-y)
	}

	return nums1[x-1]
}
