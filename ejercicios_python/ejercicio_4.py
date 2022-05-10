# escribir una función que devuelva el volumen de una esfera por su radio

def volumenEsfera(radio):
  volumen = 4 / 3 * 3.1416 * radio ** 3 
  return volumen


r = int(input('ingrese el radio de la esfera: '))

resultado = volumenEsfera(r)

print('el volumen de la esfera es: ',resultado)