package p0006

func convert(s string, numRows int) string {
	dst := make([]byte, len(s))
	next := func(maxRows int, row int, prev int) int {
		if maxRows <= 1 {
			return prev + 1
		}

		if ((prev - row) % ((maxRows - 1) * 2)) != 0 {
			return prev + (row-1)*2
		}

		if row == maxRows {
			row = 1
		}
		return prev + (maxRows-row)*2
	}

	j := 0
	for row := 1; row <= numRows; row++ {
		prev := row
		for prev <= len(s) && j < len(s) {
			dst[j] = s[prev-1]
			j++
			prev = next(numRows, row, prev)
		}
	}

	return string(dst)
}
