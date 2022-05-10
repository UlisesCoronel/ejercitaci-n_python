# escribir una función que encuentre el elemento menor de una lista. El ingreso de números corta cuando se introduce un 0

a = int(input('ingrese un número para la lista: '))
lista=[]

while a != 0:
  
  lista.append(a)
  a = int(input('ingrese un número para la lista: '))

menor = 'init'

for x in lista:
    if menor == 'init':
        menor = x
    else:
        menor = x if x < menor else menor

print('menor:', menor)
