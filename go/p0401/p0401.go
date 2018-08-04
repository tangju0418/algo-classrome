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

package p0401

func readBinaryWatch(num int) []string {
	hours := map[int][]string{
		0: []string{"0"},
		1: []string{"1", "2", "4", "8"},
		2: []string{"3", "5", "6", "9", "10"},
		3: []string{"7", "11"},
	}
	minutes := map[int][]string{
		0: []string{"00"},
		1: []string{"01", "02", "04", "08", "16", "32"},
		2: []string{
			"03", "05", "09", "17", "33",
			"06", "10", "18", "34",
			"12", "20", "36",
			"24", "40",
			"48",
		},
		3: []string{
			"07", "11", "19", "35",
			"13", "21", "37",
			"25", "41",
			"49",
			"14", "22", "38",
			"26", "42",
			"50",
			"28", "44",
			"52",
			"56",
		},
		4: []string{
			"15", "23", "27", "29", "30", "39", "43", "45", "46", "51", "53", "54", "57", "58",
		},
		5: []string{
			"31",
			"47",
			"55",
			"59",
		},
	}

	ret := make([]string, 0)

	for hoursUp := 0; hoursUp < 4 && hoursUp <= num; hoursUp++ {
		minutesUp := num - hoursUp
		if minutesUp <= 5 {
			minutesString := minutes[minutesUp]
			hoursString := hours[hoursUp]
			for _, hourString := range hoursString {
				for _, minuteString := range minutesString {
					ret = append(ret, hourString+":"+minuteString)
				}
			}
		}
	}

	return ret
}
