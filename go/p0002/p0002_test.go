package p0002

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type p0002TestSuite struct {
	suite.Suite
}

func TestP0002TestSuite(t *testing.T) {
	s := &p0002TestSuite{}
	suite.Run(t, s)
}
