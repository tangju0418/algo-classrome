package p0015

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   []int
	target [][]int
}

var values = []result{
	{
		arg1: []int{-1, 0, 1, 2, -1, -4},
		target: [][]int{
			{-1, -1, 2},
			{-1, 0, 1},
		},
	},
}

type p0015TestSuite struct {
	suite.Suite
}

func (s *p0015TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, threeSum(v.arg1))
	}
}

func TestP0015TestSuite(t *testing.T) {
	s := &p0015TestSuite{}
	suite.Run(t, s)
}
