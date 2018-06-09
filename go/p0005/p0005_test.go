package p0005

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   string
	target string
}

var values = []result{
	{
		arg1:   "babad",
		target: "bab",
	},
	{
		arg1:   "cbbd",
		target: "bb",
	},
}

type p0005TestSuite struct {
	suite.Suite
}

func (s *p0005TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, longestPalindrome(v.arg1))
	}
}

func TestP0005TestSuite(t *testing.T) {
	s := &p0005TestSuite{}
	suite.Run(t, s)
}
