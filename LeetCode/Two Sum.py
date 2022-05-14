# Leet Code: 'Two Sum'
# https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:    
        for i in range(len(nums)):
            resto = target - nums[i]
            if resto in nums:
                a = nums.index(resto)
                if a != i:
                    return([i,a])
            
