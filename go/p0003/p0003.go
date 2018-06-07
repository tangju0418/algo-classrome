package p0003

// 动态规划
func lengthOfLongestSubstring(s string) int {
	length := 0
	startIndex := 0
	cachedIndex := make(map[rune]int)

	for i, c := range s {
		lastIndex, exists := cachedIndex[c]
		if exists && lastIndex >= startIndex {
			startIndex = lastIndex + 1
		}

		currLength := i - startIndex + 1
		if currLength > length {
			length = currLength
		}
		cachedIndex[c] = i
	}

	return length
}
