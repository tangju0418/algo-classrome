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

package p0665

import (
	"math"
)

func checkPossibility(nums []int) bool {
	i, j := 0, len(nums)-1
	for i < j && nums[i] <= nums[i+1] {
		i++
	}

	for j > i && nums[j-1] <= nums[j] {
		j--
	}

	head := 0
	if i == 0 {
		head = math.MinInt64
	} else {
		head = nums[i-1]
	}

	next := 0
	if j == len(nums)-1 {
		next = math.MaxInt64
	} else {
		next = nums[j+1]
	}

	if j-i <= 1 && (head <= nums[j] || nums[i] <= next) {
		return true
	}

	return false
}
