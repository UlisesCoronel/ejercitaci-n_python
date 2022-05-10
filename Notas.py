                            #MODULOS

# 1 - Importar un módulo

from selectors import DefaultSelector
import modulo
print(modulo.mascotas)

# 2 - Renombrar módulo al importar

import modulo as nuevoNombre

print(nuevoNombre.mascotas)

# 3 - Seleccionar elementos a importar

from modulo import mascotas, saludo #si son más de uno se separa con comas

# 4 - PIP

# Sirve para importar modulos de la red. Se buscan en la web https://pypi.org
# Ejemplo CamelCase

# Se busca en la página el comando y se lo ejecuta en la terminal: pip install camelcase

from camelcase import CamelCase

c = CamelCase()
s = 'esta oración necesita CamelCase!'

camelcased = c.hump(s)
print(camelcased)

#Averiguar los parquetes que tenemos instalados de pip: pip list
#Desinstalar módulos: pip uninstall camelcase

        #GESTION DE ARCHIVOS

c = open('chanchito.txt') #abre en 'c' el archivo ()
print(c.read()) # .read() es un método que lee lo que se encuentra en el archivo

c = open('chanchito.txt','r') #el segundo parámetro define los permisos que tenemos sobre el archivo

# 'r' = read(leer) Por Defecto 
# 'a' = append (agregar al final más texto)
# 'w' = write (deja modificar completamente el archivo, si el archivo no existe, lo crea)
# 'x' = crea un archivo nuevo 

print(c.readline()) #lee las lineas de uno en uno

for x in c: # c es un elemento iterable, x es cada una de las lineas
  print(x)

c.close() #una vez abierto el archivo, lo cerramos con este método

c.write('agregaremos una nueva linea al archivo')
#el comportamiento depende de los permisos: 
# 'a' = agrega una linea
# 'w' = reescribe el archivo con el contenido nuevo

#Eliminar archivos o carpetas

import os

os.remove('chanchito.txt') #elimina el archivo, da error si no existe

if os.path.exists('chanchito.txt'): #validar el archivo previo a eliminarlo
  os.remove('chanchito.txt')
else:
  print('el archivo no existe')

os.rmdir('miCarpeta') #elimina una carpeta




