package p0006

func convert(s string, numRows int) string {
	if numRows <= 1 {
		return s
	}

	dst := make([]byte, len(s))
	j := 0
	si := 1
	row := 1
	for si <= len(s) {
		dst[j] = s[si-1]
		si = si + (numRows-row)*2
		j++
	}

	row = 2
	for row < numRows {
		si = row
		column := true
		for si <= len(s) {
			dst[j] = s[si-1]
			if column {
				si = si + (numRows-row)*2
				column = !column
			} else {
				si = si + (row-1)*2
				column = !column
			}

			j++
		}
		row++
	}

	row = numRows
	si = row
	for si <= len(s) {
		dst[j] = s[si-1]
		si = si + (numRows-1)*2
		j++
	}

	return string(dst)
}
