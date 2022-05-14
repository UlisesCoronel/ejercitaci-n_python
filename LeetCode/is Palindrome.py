# Leet Code https://leetcode.com/problems/palindrome-number/

class Solution:
    def isPalindrome(self, x: int) -> bool:
      a = str(x)
      b = a [::-1]
      c = a == b
      return c