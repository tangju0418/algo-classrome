package p0006

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   string
	arg2   int
	target string
}

var values = []result{
	{
		arg1:   "PAYPALISHIRING",
		arg2:   3,
		target: "PAHNAPLSIIGYIR",
	},
	{
		arg1:   "PAYPALISHIRING",
		arg2:   4,
		target: "PINALSIGYAHRPI",
	},
	{
		arg1:   "abcdefghijklmnopqrstuvwxyz",
		arg2:   4,
		target: "agmsybfhlnrtxzceikoquwdjpv",
	},
}

type p0006TestSuite struct {
	suite.Suite
}

func (s *p0006TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, convert(v.arg1, v.arg2))
	}
}

func TestP0006TestSuite(t *testing.T) {
	s := &p0006TestSuite{}
	suite.Run(t, s)
}
