package p0015

import (
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	rs := make([][]int, 0)

	for i := 0; i < len(nums)-2; i++ {
		if i != 0 && nums[i] == nums[i-1] {
			continue
		}

		target := 0 - nums[i]
		j := i + 1
		k := len(nums) - 1
		movej := 0
		for j < k {
			if movej == 1 && nums[j] == nums[j-1] {
				j++
				continue
			} else if movej == 2 && nums[k] == nums[k+1] {
				k--
				continue
			}

			sum := nums[j] + nums[k]
			if sum == target {
				rs = append(rs, []int{nums[i], nums[j], nums[k]})
				j++
				k--
				movej = 1
			} else if sum < target {
				j++
				movej = 1
			} else {
				k--
				movej = 2
			}
		}
	}

	return rs
}
