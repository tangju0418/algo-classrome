package p001

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/suite"
)

type p001TestSuite struct {
	suite.Suite
}

type record struct {
	nums   []int
	target int
	solve  []int
	solve2 []int
}

var values = []record{
	{
		nums:   []int{2, 7, 11, 15},
		target: 9,
		solve:  []int{0, 1},
		solve2: []int{2, 7},
	},
}

func (s *p001TestSuite) TestTwoSum() {
	for _, v := range values {
		r := twoSum(v.nums, v.target)
		s.NotNil(r)

		sort.Ints(r)
		s.Equal(v.solve, r)
	}
}

func (s *p001TestSuite) TestTwoSum2() {
	for _, v := range values {
		r := twoSum2(v.nums, v.target)
		s.NotNil(r)

		sort.Ints(r)
		s.Equal(v.solve2, r)
	}
}

func TestP001TestSuite(t *testing.T) {
	s := &p001TestSuite{}
	suite.Run(t, s)
}
