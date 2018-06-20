package p0007

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   int
	target int
}

var values = []result{
	{
		arg1:   123,
		target: 321,
	},
	{
		arg1:   -123,
		target: -321,
	},
	{
		arg1:   120,
		target: 21,
	},
}

type p0007TestSuite struct {
	suite.Suite
}

func (s *p0007TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, reverse(v.arg1))
	}
}

func TestP0007TestSuite(t *testing.T) {
	s := &p0007TestSuite{}
	suite.Run(t, s)
}
