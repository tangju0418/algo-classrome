package p0003

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	args   string
	target int
}

var values = []result{
	{
		args:   "abcabcbb",
		target: 3,
	},
	{
		args:   "bbbbb",
		target: 1,
	},
	{
		args:   "pwwkew",
		target: 3,
	},
}

type p0003TestSuite struct {
	suite.Suite
}

func (s *p0003TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, lengthOfLongestSubstring(v.args))
	}
}

func TestP0003TestSuite(t *testing.T) {
	s := &p0003TestSuite{}
	suite.Run(t, s)
}

func init() {

}
