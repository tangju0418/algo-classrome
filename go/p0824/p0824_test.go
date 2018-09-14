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

package p0824

import (
	"testing"

	"github.com/stretchr/testify/suite"
)

type result struct {
	arg1   string
	target string
}

var values = []result{
	{
		arg1:   "I speak Goat Latin",
		target: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
	},
	{
		arg1:   "The quick brown fox jumped over the lazy dog",
		target: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa",
	},
	{
		arg1:   "Each word consists of lowercase and uppercase letters only",
		target: "Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa",
	},
}

type p0824TestSuite struct {
	suite.Suite
}

func (s *p0824TestSuite) Test() {
	for _, v := range values {
		s.Equal(v.target, toGoatLatin(v.arg1))
	}
}

func TestP0824TestSuite(t *testing.T) {
	s := &p0824TestSuite{}
	suite.Run(t, s)
}
