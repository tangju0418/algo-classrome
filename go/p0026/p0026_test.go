package p0026

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1    []int
	target  int
	target2 []int
}

var values = []result{
	{
		arg1:    []int{1, 1, 2},
		target:  2,
		target2: []int{1, 2},
	},
	{
		arg1:    []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4},
		target:  5,
		target2: []int{0, 1, 2, 3, 4},
	},
}

type p0026TestSuite struct {
	suite.Suite
}

func (s *p0026TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target2, v.arg1[:removeDuplicates(v.arg1)])
	}
}

func TestP0026TestSuite(t *testing.T) {
	s := &p0026TestSuite{}
	suite.Run(t, s)
}
