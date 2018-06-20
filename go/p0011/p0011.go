package p0011

func maxArea(height []int) int {
	minInt := func(v1 int, v2 int) int {
		if v1 < v2 {
			return v1
		}
		return v2
	}

	left, right, max := 0, len(height)-1, 0

	for left < right {
		curr := (right - left) * minInt(height[right], height[left])
		if curr > max {
			max = curr
		}

		if height[right] < height[left] {
			right--
		} else {
			left++
		}
	}

	return max
}
