// Copyright (c) 2018 soren yang
//
// Licensed under the MIT License
// you may not use this file except in complicance with the License.
// You may obtain a copy of the License at
//
//     https://opensource.org/licenses/MIT
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package p0083

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type p0083TestSuite struct {
	suite.Suite
}

type record struct {
	arg1   []int
	target []int
}

var values = []record{
	{
		arg1:   []int{1, 1, 2},
		target: []int{1, 2},
	},
	{
		arg1:   []int{1, 1, 2, 3, 3},
		target: []int{1, 2, 3},
	},
}

type result struct {
	l1     *ListNode
	target *ListNode
}

var results []*result

func (s *p0083TestSuite) TestAddTwoNumbers() {
	s.Equal(len(values), len(results))

	for _, v := range results {
		actual := deleteDuplicates(v.l1)
		assertEqual(s.Suite, v.target, actual)
	}
}

func TestP0083TestSuite(t *testing.T) {
	s := &p0083TestSuite{}
	suite.Run(t, s)
}

func assertEqual(t suite.Suite, expected *ListNode, actual *ListNode) {
	for expected != nil && actual != nil {
		t.Equal(expected.Val, actual.Val)
		expected = expected.Next
		actual = actual.Next
	}

	t.Nil(expected)
	t.Nil(actual)
}

func init() {
	links := func(args []int) *ListNode {
		head := &ListNode{}
		tail := head
		for _, v := range args {
			tail.Next = &ListNode{
				Val:  v,
				Next: nil,
			}
			tail = tail.Next
		}
		return head.Next
	}

	for _, v := range values {
		results = append(results, &result{
			l1:     links(v.arg1),
			target: links(v.target),
		})
	}
}
