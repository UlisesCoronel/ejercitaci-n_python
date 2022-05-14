# Hacer un programa para ingresar los valores de los pesos de distintas
# encomiendas que se deben enviar a distintos clientes y que finaliza cuando se
# ingresa un peso negativo. Se deben agrupar las encomiendas en camiones que
# pueden transportar hasta 200 kilos en total.

# Por ejemplo:
# 10, 20, 140,     70, 100,       40, 10, 50, 80,       90, 30, 40,     50,               -10.
# Camión 1.        Camión 2       Camión 3              Camión 4        Camión 5

# Se pide determinar e informar:

# a. El número de camión y peso total de encomiendas (Camión 1: 170kg,
# Camión 2: 170kg, etc.).
# b. El número de camión que transporta mayor cantidad de encomiendas
# (en el ejemplo anterior sería el camión 3 con 4 encomiendas).
# c. La cantidad de camiones que se terminaron cargando.

encomienda = int(input('ingrese la primer encomienda: '))

camion = 0

lista_carga = []


while encomienda > 0:

  carga = encomienda
  lleno = False
  camion += 1
  cantidad_encomiendas = 0

  while lleno == False and encomienda > 0:
    cantidad_encomiendas += 1
    encomienda = int(input('ingrese una nueva encomienda: '))

    if (carga + encomienda) < 200:
      carga += encomienda
    else:
      lleno = True
      print('el peso del camión',camion,'es:',carga)

  if camion == 1:
    maximo_encomiendas = cantidad_encomiendas
    maximo_camion = camion
  elif maximo_encomiendas < cantidad_encomiendas:
    maximo_encomiendas = cantidad_encomiendas
    maximo_camion = camion

  lista_carga.append((camion,carga))

print(lista_carga)  
print('el camion que lleva más encomiendas es el', maximo_camion,'llevando',maximo_encomiendas,'encomiendas')
print('la cantidad total de camiones cargados es:',camion)