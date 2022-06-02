# Leet Code https://leetcode.com/problems/longest-common-prefix/

strs = ["dog","racecar","car"]

a = strs[0]
s=''

for n in range(a):
  for b in strs:
    if n == len(b) or a[n] != b[n]:
      return s
  s += a[n]  
