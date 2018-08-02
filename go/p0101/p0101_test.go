// You may obtain a copy of the License at
//
//     https://opensource.org/licenses/MIT
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package p0101

import (
	"testing"

	"github.com/lsytj0413/algo-classrome/go/comm"
	"github.com/stretchr/testify/suite"
)

type record struct {
	arg1   []int
	target bool
}

type result struct {
	arg1   *TreeNode
	target bool
}

var records = []record{
	{
		arg1:   []int{1, 2, 2, 3, 4, 4, 3},
		target: true,
	},
	{
		arg1:   []int{1, 2, 2, 0xFFFFFFFF, 3, 0xFFFFFFFF, 3},
		target: false,
	},
}

var values []result

type p0101TestSuite struct {
	suite.Suite
}

func (s *p0101TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, isSymmetric(v.arg1))
	}
}

func TestP0101TestSuite(t *testing.T) {
	s := &p0101TestSuite{}
	suite.Run(t, s)
}

func init() {
	for _, v := range records {
		values = append(values, result{
			arg1:   comm.Trees(v.arg1),
			target: v.target,
		})
	}
}
