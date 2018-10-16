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

package p0208

import (
	"fmt"
	"strings"
)

type Node struct {
	key      string
	end      bool
	children []*Node
}

func commonPrefix(s1 string, s2 string) string {
	if len(s1) > len(s2) {
		s1, s2 = s2, s1
	}

	for i := 0; i < len(s1); i++ {
		if s1[i] != s2[i] {
			return s1[0:i]
		}
	}

	return s1
}

func (n *Node) Insert(word string) {
	if n.key == word {
		n.end = true
		return
	}

	// fmt.Println("Insert: key(", n.key, "), word(", word, ")")

	if (len(n.key) != 0 && !strings.HasPrefix(word, n.key)) || len(word) < len(n.key) { // split node
		prefix := commonPrefix(word, n.key)
		// fmt.Println("commonPrefix: ", prefix)
		key := n.key
		n.key = prefix

		// key = strings.Replace(key, prefix, "", -1)
		if key == prefix {
			key = ""
		} else {
			key = key[len(prefix):]
		}
		if word == prefix {
			word = ""
		} else {
			word = word[len(prefix):]
		}

		if word == "" {
			n.children = []*Node{
				&Node{
					key:      key,
					end:      n.end,
					children: n.children,
				},
			}
			n.end = true
		} else {
			n.children = []*Node{
				&Node{
					key:      key,
					end:      n.end,
					children: n.children,
				},
				&Node{
					key:      word,
					end:      true,
					children: []*Node{},
				},
			}
			n.end = false
		}

		return
	}

	// word = strings.Replace(word, n.key, "", -1)
	word = word[len(n.key):]
	for _, child := range n.children {
		if word[0] == child.key[0] {
			child.Insert(word)
			return
		}
	}

	n.children = append(n.children, &Node{
		key:      word,
		end:      true,
		children: make([]*Node, 0),
	})
	return
}

func (n *Node) Search(word string) bool {
	if len(word) < len(n.key) {
		return false
	}

	if n.key == word {
		return n.end
	}

	if commonPrefix(word, n.key) != n.key {
		return false
	}

	// word = strings.Replace(word, n.key, "", -1)
	word = word[len(n.key):len(word)]

	if word == "" {
		fmt.Println("PANIC: Search word is empty")
	}

	for _, child := range n.children {
		if child.key[0] == word[0] {
			return child.Search(word)
		}
	}
	return false
}

func (n *Node) StartsWith(prefix string) bool {
	if n.key == prefix {
		return true
	}

	// fmt.Println("StartsWith: key(", n.key, "), prefix(", prefix, ")")
	if len(prefix) < len(n.key) {
		return strings.HasPrefix(n.key, prefix)
	}

	if !strings.HasPrefix(prefix, n.key) {
		return false
	}

	// prefix = strings.Replace(prefix, n.key, "", -1)
	prefix = prefix[len(n.key):len(prefix)]
	if prefix == "" {
		fmt.Println("PANIC: StartsWith prefix is empty")
	}

	for _, child := range n.children {
		if child.key[0] == prefix[0] {
			return child.StartsWith(prefix)
		}
	}
	return false
}

type Trie struct {
	n *Node
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{
		n: &Node{
			key:      "",
			end:      false,
			children: make([]*Node, 0),
		},
	}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	this.n.Insert(word)
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	return this.n.Search(word)
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	return this.n.StartsWith(prefix)
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
