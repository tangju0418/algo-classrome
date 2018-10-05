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

package p0078

func subsets(nums []int) [][]int {
	ret := make([][]int, 0) // TODO: 预分配容量
	ret = append(ret, []int{})

	for _, num := range nums {
		arrs, w := make([][]int, len(ret)), 0
		for _, arr := range ret {
			cp := make([]int, len(arr))
			copy(cp, arr)
			cp = append(cp, num)
			arrs[w] = cp
			w++
		}

		ret = append(ret, arrs...)
	}

	return ret
}
