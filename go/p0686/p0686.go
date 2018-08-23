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

package p0686

import (
	"strings"
)

func repeatedStringMatch(A string, B string) int {
	switch {
	case len(A) >= len(B):
		if strings.Index(A, B) != -1 {
			return 1
		}
		if strings.Index(A+A, B) != -1 {
			return 2
		}
	case len(A) < len(B):
		dest := A
		count := 1
		for len(dest) < len(B) {
			count++
			dest = dest + A
		}

		if strings.Index(dest, B) != -1 {
			return count
		}
		if strings.Index(dest+A, B) != -1 {
			return count + 1
		}
	}

	return -1
}
