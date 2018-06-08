package p0004

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   []int
	arg2   []int
	target float64
}

var values = []result{
	{
		arg1:   []int{1, 3},
		arg2:   []int{2},
		target: 2,
	},
	{
		arg1:   []int{1, 2},
		arg2:   []int{3, 4},
		target: 2.5,
	},
	{
		arg1:   []int{},
		arg2:   []int{1, 2, 3, 4, 5},
		target: 3,
	},
	{
		arg1:   []int{3},
		arg2:   []int{1, 2},
		target: 2,
	},
}

type p0004TestSuite struct {
	suite.Suite
}

func (s *p0004TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, findMedianSortedArrays(v.arg1, v.arg2))
	}
}

func TestP0004TestSuite(t *testing.T) {
	s := &p0004TestSuite{}
	suite.Run(t, s)
}
