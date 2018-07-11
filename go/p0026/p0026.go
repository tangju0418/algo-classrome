package p0026

func removeDuplicates(nums []int) int {
	if 0 == len(nums) {
		return 0
	}

	i, j := 1, 1
	for j < len(nums) {
		if nums[j] != nums[i-1] {
			nums[i] = nums[j]
			i++
		}
		j++
	}
	return i
}
