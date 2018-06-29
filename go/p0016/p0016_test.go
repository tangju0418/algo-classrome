package p0016

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   []int
	arg2   int
	target int
}

var values = []result{
	{
		arg1:   []int{-1, 2, 1, -4},
		arg2:   1,
		target: 2,
	},
	{
		arg1:   []int{0, 0, 0},
		arg2:   1,
		target: 0,
	},
	{
		arg1:   []int{1, 1, 1, 0},
		arg2:   -100,
		target: 2,
	},
}

type p0016TestSuite struct {
	suite.Suite
}

func (s *p0016TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, threeSumClosest(v.arg1, v.arg2))
	}
}

func TestP0016TestSuite(t *testing.T) {
	s := &p0016TestSuite{}
	suite.Run(t, s)
}
