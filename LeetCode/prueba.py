# Leet Code https://leetcode.com/problems/roman-to-integer/

def romanToInt(s):

  romanDic = {'I':1, 'V':5 , 'X':10 , 'L':50 , 'C':100 , 'D':500 , 'M':1000}
  resultado = 0
  for n , s_roman in enumerate(s):
    if n+1 != len(s) and romanDic[s_roman] < romanDic[s[n+1]]:
      resultado -=  romanDic[s_roman]
    else:
      resultado +=  romanDic[s_roman]
  
  return resultado
        
s = romanToInt('MCMXCIV')
print(s)