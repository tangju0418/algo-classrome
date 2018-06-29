package p0016

import (
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	rs := 0xFFFFFFFF

	for i := 0; i < len(nums)-2; i++ {
		if i != 0 && nums[i] == nums[i-1] {
			continue
		}

		target0 := target - nums[i]
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
			if sum == target0 {
				return target
			}

			if rs == 0xFFFFFFFF || (math.Abs(float64(target-rs)) > math.Abs(float64(target-(nums[i]+sum)))) {
				rs = nums[i] + sum
			}

			if sum < target0 {

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
