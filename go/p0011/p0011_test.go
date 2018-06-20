package p0011

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   []int
	target int
}

var values = []result{
	{
		arg1:   []int{1, 1},
		target: 1,
	},
}

type p0011TestSuite struct {
	suite.Suite
}

func (s *p0011TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, maxArea(v.arg1))
	}
}

func TestP0011TestSuite(t *testing.T) {
	s := &p0011TestSuite{}
	suite.Run(t, s)
}
