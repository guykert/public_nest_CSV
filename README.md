<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Instalaciones

Para instalar el Cli

```
npm i -g @nestjs/cli
```

Comandos docker
```
docker-compose up -d

docker-compose down
```

Comandos para crear mantenedores

```
nest g res users
```


para instalar uuid para manejar ids como strings

```

yarn add uuid

yarn add -D @types/uuid

yarn add class-validator

yarn add class-transformer

```

Para instalar mongoose
```

yarn add @nestjs/mongoose mongoose

```

Para instalar axios que es un polugin para hacer llamados http

```

yarn add axios

```

Pruebas de paginación

```

yarn add mongoose-paginate-v2

```


paquete para validar email al realizar pruebas de carga de datos donde no se usa el Dto

```

yarn add email-validator

```

instalar paquete para que tome las variables de entorno

```

yarn add @nestjs/config

```


instalar un paquete de validación Joi

```

yarn add joi

```

Clonar el archivo __.env.template y renombrar la copia a __.env

Llenar las variables de entorno definidas en ql ```.env```


Production build
1. Crear el archivo ```.env.prod```
2. llenar las variables de entorno de prod
3. Crear la nueva imagen

```

docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

una vez creada la imagen si queremos correr la imagen 

```

docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d

```


Proceso de autenticación

1. Creamos un nuevo recurso para el auth

```

nest g res auth

```

Para encriptar la pass instalamos bcrypt
```

yarn add bcrypt

yarn add -D @types/bcrypt

```

Para generar el token 

```

yarn add @nestjs/passport passport passport-local

yarn add -D @types/passport-local

yarn add @nestjs/jwt passport-jwt

yarn add -D @types/passport-jwt

```

Para crear un guard
```

nest g gu auth/guards/userRole
nest g gu auth/guards/userPermissions

```

Para crear un decorador
```

nest g d auth/decorators/roleProtected

```

Creo los cruds
```

nest g res proyectos
nest g res role
nest g res permission
nest g res configuracion-anios
nest g res empresa
nest g res tipo-empresa
nest g res tipo-alumno 
nest g res dia   
nest g res ramo 
nest g res asignaturas-curriculares
nest g res sexo
nest g res nivel
nest g res letra
nest g res pais 
nest g res tipo-prueba
nest g res prueba-tipo
nest g res prueba-tabla-comversion
nest g res prueba-formula
nest g res prueba-alumno
nest g res prueba-habilidad
nest g res prueba-eje-tematico
nest g res prueba-sub-eje-tematico
nest g res prueba-pauta
nest g res prueba-tabla-conversion-detalle
nest g res menu-tipo
nest g res menu
nest g res ingles
nest g res ingles-detalle
nest g res curso-aprender
nest g res curso-aprender-detalle


```


Errores al realizar las peticiones desde axios. Axios realiza una validación antes de realizar la llamada final y en el metodo envía options

Esto no lo estaba tomando por lo que para solucionarlo

En el archivo Main.ts agregué esto : 

```

  app.enableCors();

```

Para recuperar la clave

```

  yarn add nestjs-mailgun

```



Para Hacer pruebas unitarias con mongoose

```

  yarn add mongodb-memory-server

```

