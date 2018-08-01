// You may obtain a copy of the License at
//
//     https://opensource.org/licenses/MIT
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package p0100

import (
	"testing"

	"github.com/lsytj0413/algo-classrome/go/comm"
	"github.com/stretchr/testify/suite"
)

type record struct {
	arg1   []int
	arg2   []int
	target bool
}

type result struct {
	arg1   *TreeNode
	arg2   *TreeNode
	target bool
}

var records = []record{
	{
		arg1:   []int{1, 2, 3},
		arg2:   []int{1, 2, 3},
		target: true,
	},
	{
		arg1:   []int{1, 2},
		arg2:   []int{1, 0xFFFFFFFF, 2},
		target: false,
	},
	{
		arg1:   []int{1, 2, 1},
		arg2:   []int{1, 1, 2},
		target: false,
	},
}

var values []result

type p0100TestSuite struct {
	suite.Suite
}

func (s *p0100TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, isSameTree(v.arg1, v.arg2))
	}
}

func TestP0100TestSuite(t *testing.T) {
	s := &p0100TestSuite{}
	suite.Run(t, s)
}

func init() {
	for _, v := range records {
		values = append(values, result{
			arg1:   comm.Trees(v.arg1),
			arg2:   comm.Trees(v.arg2),
			target: v.target,
		})
	}
}
