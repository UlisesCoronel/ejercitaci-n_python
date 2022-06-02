def puzzle(N):
  
  A = int(1)
  B = int(1)
  C = int(1)
  D = int(1)
  acu = int(0)
  X = 0

  while acu != N:

    X = D + (2 * C) + (3 * B) + (4 * A)
    A = B
    B = C
    C = D
    D = X
    acu += 1

  return (D%10000000000)

N = int(input('ingrese aquí el valor de N: '))

a = puzzle(N)

print(a)
