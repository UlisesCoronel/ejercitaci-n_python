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













#----------- BASES DE DATOS

import mysql.connector

midb = mysql.connector.connect( #el método devuelve una instancia de DB
  host='localhost', #dice que nos vamos a conectar a un servidor local
  user='UlisesCoronel', #el usuario que se va a conectar
  password='Ulis3s_Cor0n3l',
  database='prueba' #nombre de la base de datos
)

cursor = midb.cursor()
# el cursor es un objeto que nos permite interactuar con la DB
# mediante lenguaje SQL

cursor.execute('select * from Usuario')
#recupera todos los registros guardados en usuario

resultado = cursor.fetchall()
#guarda todos los resultados la consulta de cursor.execute()

resultado = cursor.fetchone()
#guarda sólo el PRIMER ELEMENTO


print(resultado)





#------------------- Consultas a la DB

cursor.execute('show create table usuario')
#muestra la definición de la tabla

resultado = cursor.fetchall()

print(resultado)




#------------------- insertar nuevos registros

sql = 'insert into usuario (email,username,edad) values (%s,%s,%s)'
#esta es la instrucción a enviar a sql, los valores se encuentran vacíos

nuevo_usuario = ('nuevo_usuario@correo.com','Nuevo Usuario', 45)
#parametros que definen el nuevo registro de la DB

cursor.execute(sql,nuevo_usuario)
#ejecuta a la acción indicada en 'sql'

midb.commit()
#ejecuta la consulta hecha en cursor.execute

cursor.execute('select * from usuario')

resultado = cursor.fetchall()

print(resultado)




#---------------- Actualizar datos de la db

sql = 'update usuario set email = %s where id = %s'
#comando para actualizar datos
value = ('micorreo@otrocorreo.com',4)
cursor.execute(sql,value)

midb.commit()

cursor.execute('select * from usuario')

consulta = cursor.fetchall()

print(consulta)





#-------------- Eliminar datos de la DB

sql = 'delete from usuario where id = %s'
value = (4,)
#los valores se pasan siempre como tuplas, así sea solo uno

cursor.execute(sql,value)

midb.commit()

cursor.execute('select * from usuario')

consulta = cursor.fetchall()

print(consulta)




#--------------- Consultas parciales

cursor.execute('select * from usuario limit 2')
#limit %s indica la cantidad de consultas a realizar


resultado = cursor.fetchall()

print(resultado)