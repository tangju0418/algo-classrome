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

package p0091

func numDecodings(s string) int { // TODO: 优化为 dp
	_num1 := func(b byte) int {
		return int(b - '0')
	}
	_num2 := func(b1 byte, b2 byte) int {
		return _num1(b1)*10 + _num1(b2)
	}

	if len(s) > 0 && s[0] == '0' {
		return 0
	}

	switch {
	case 0 == len(s):
		return 1
	case 1 == len(s):
		return 1
	default:
		count := numDecodings(s[1:len(s)])
		if _num2(s[0], s[1]) <= 26 {
			count += numDecodings(s[2:len(s)])
		}
		return count
	}
}
