# Proyecto 2

Este proyecto tiene como objetivo crear una conexión a una BD Firebase y editar sus datos a través de una interfaz hecha con Electron. Esto les enseñará a utilizar una BD sin preocuparse por cosas como Modelos, SQL y migraciones. Además podrán aplicar autenticación, escuchar eventos y tener acceso a la BD directamente con su cuenta de Google (sin pasar por instalaciones tediosas).

## Contexto

Siempre es útil tener un contexto para incentivar al developer y no dar la sensación de que pierde su tiempo al no lograr nada.

Su empresa acaba de atender a un cliente que requiere sus servicios pero éste no está seguro de que puedan cumplir con sus exigencias. Por esto, el cliente requiere un demo en el cual ustedes demuestren las capacidades que tienen y su potencial. El demo debe presentar una interfaz que requiera una autenticación y posterior a esto provea un panel de administrador sencillo en el que se pueda modificar la BD por completo. El cliente utiliza Internet Explorer 1, un SO (sistema operativo) basado en Debian, tiene instalado Node y no posee ningún manejador de BD instalado.

## Requerimientos

Su proyecto debe proveer las siguientes funcionalidades:

* Autenticación.
* Los usuarios deben ser creados en la BD directamente (no a través de la interfaz).
* Panel de administrador para editar la BD (editar absolutamente todo).
* Una interfaz que esté conectada en tiempo real a los datos que provee la BD.

Su proyecto debe utilizar las siguientes tecnologías:

* Una interfaz hecha con Electron para evitar el uso de un browser obsoleto.
* Una BD Firebase asociada a una cuenta de Google para poder editarla fácilmente.
* La versión LTS de Node y uso de ES6.