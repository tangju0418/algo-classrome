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

package comm

// ListNode for singly-linked list
type ListNode struct {
	Val  int
	Next *ListNode
}

// Links construct ListNode from []int
func Links(arg []int) *ListNode {
	head := &ListNode{}
	tail := head
	for _, v := range arg {
		tail.Next = &ListNode{
			Val:  v,
			Next: nil,
		}
		tail = tail.Next
	}

	return head.Next
}
