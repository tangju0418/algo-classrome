# coding=utf-8


class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if 0 == len(strs):
            return ""

        if 1 == len(strs):
            return strs[0]

        lens = 0
        for i in range(len(strs[0])):
            c = strs[0][i]
            for s in strs:
                if i >= len(s) or c != s[i]:
                    break
            else:
                lens += 1
                continue
            break

        return strs[0][:lens]
