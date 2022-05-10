# multiplicar dos números sin usar el símbolo de multiplicación

a = int(input('ingrese el primer número:'))
b = int(input('ingrese el segundo número:'))

resultado = 0

for x in range(b):
  resultado += a

print(resultado)