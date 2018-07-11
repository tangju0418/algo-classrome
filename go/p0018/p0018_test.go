package p0018

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   []int
	arg2   int
	target [][]int
}

var values = []result{
	{
		arg1: []int{1, 0, -1, 0, -2, 2},
		arg2: 0,
		target: [][]int{
			[]int{-2, -1, 1, 2},
			[]int{-2, 0, 0, 2},
			[]int{-1, 0, 0, 1},
		},
	},
}

type p0018TestSuite struct {
	suite.Suite
}

func (s *p0018TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, fourSum(v.arg1, v.arg2))
	}
}

func TestP0018TestSuite(t *testing.T) {
	s := &p0018TestSuite{}
	suite.Run(t, s)
}
