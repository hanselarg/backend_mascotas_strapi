# App Mascotas

Esta aplicación tiene por objetivo la carga de mascotas. Se compone de un frontend en React donde se podran cargar los datos, y un backend realizado en Strapi que contiene la lógica de negocio y el preprocesamiento de datos antes de almacenarlos en la base de datos.


## Base de datos

Para levantar una base de datos en postgress correr el siguiente comando de docker(requiere [instalación](https://docs.docker.com/engine/install/) previa ):

```
    docker run -d --name strapi-db --rm -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_DB=strapi-db -v ~/volumes/strapi-db:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres postgres:14
```


## Backend Strapi

Para correr el backend ejecutar el siguiente comando en la ruta /back/mascotas

```
npm run develop
```

Para acceder al administrador de Strapi, ingresar en **http://localhost:1337/admin**
