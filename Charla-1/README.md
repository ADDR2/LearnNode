# Documentación complementaria a la charla 1

## Introducción/Resumen

En esta sección se abordarán los siguientes temas:

1. Características y utilidad de NodeJS.
2. Dependencias principales.
3. Event Loop.

## Características y utilidad de NodeJS

Node es un framework sobre Javascript que ejecuta procesos de entrada y salida (I/O) de manera no bloqueante. Como framework de Javascript, contiene un procesador del lenguaje Javascript de manera que se puedan ejecutar casi las mismas tareas que pueden ejecutar otros lenguajes (Python, C, Java, etc) y no sólo aquellas tareas relacionadas a un navegador.

El objetivo de Node como herramienta es poder utilizar el lenguaje Javascript como cualquier otro lenguaje en el cual se puede acceder a funcionalidades del sistema operativo, como lo son: lectura y escritura de archivos, ejecución de comandos, interacción a través de diferentes protocolos de comunicación (http, TCP, etc), desarrollo de aplicaciones locales (standalone) y manejo de paralelismo y/o concurrencia.

### Ejecución no bloqueante

Node es capaz de ejecutar de manera no bloqueante todos los procesos de entrada y salida (I/O), pero en muchos casos también se le puede indicar que no lo haga de esta manera.

```js
const { readFile } = require('fs');

function printSomething() {
    return Math.random()*10;
}

readFile('./README.md', 'utf8', (error, data) => {
    if (error) throw error;

    console.log('First log: ', data);
});

console.log('Second log: ', 1+2);

console.log('Third log: ', printSomething());
```

El código de arriba es un ejemplo de un proceso no bloqueante, pues el procesamiento es de la siguiente manera:

	1. Se importa la función readFile del paquete/módulo fs.
	2. Se declara la función printSomething (sin ejecutarla).
	3. Se ejecuta la función readFile con algunos parámetros sin ejecutar la función pasada como tercer argumento.
	4. Se ejecuta la función log del objeto console. Por lo que se imprime en consola un mensaje seguido el valor resultante de la expresión 1+2 (Second log:  3).
	5. Se ejecuta la función log del objeto console. Por lo que se imprime en consola el valor resultante de la expresión printSomething().
	6. Se ejecuta la función pasada como tercer argumento a la función readFile.
	7. Se evalua si existe algún error en la lectura del archivo.
	8. Se ejecuta la función log del objeto console. Por lo que se imprime en consola el contenido del archivo en forma de string.

Esto se ilustra mejor en la siguiente imagen:


El resultado en consola debería ser algo parecido al siguiente:

![Resultado](https://github.com/ADDR2/LearnNode/blob/charla-1/Charla-1/Result.png?raw=true)


### Proceso Event Loop

### Manejo de paquetes/librerías/módulos

### Extensiones