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

El resultado en consola debería ser algo parecido al siguiente:

![Resultado](https://github.com/ADDR2/LearnNode/blob/charla-1/Charla-1/Result.png?raw=true)

Esto se ilustra mejor en la siguiente imagen:

![Grafica](https://github.com/ADDR2/LearnNode/blob/charla-1/Charla-1/Non-Blocking-Chart.png?raw=true)

En la parte superior de la imagen se ilustra el tiempo requerido para la ejecución de todo el código de manera no bloqueante, pero en la parte inferior se ilustra el tiempo requerido para la ejecución del código de manera bloqueante. Es decir, la imagen en la parte inferior sería el equivalente a el siguiente código:

```js
const { readFileSync } = require('fs');

function printSomething() {
    return Math.random()*10;
}

const data = readFileSync('./README.md', 'utf8');

console.log('First log: ', data);

console.log('Second log: ', 1+2);

console.log('Third log: ', printSomething());
```


### Proceso Event Loop

Node procesa todo tu código síncrono y delega todo lo asíncrono a este proceso. El `Event Loop` es un algoritmo que se ejecuta al final de haber ejecutado todo tu código síncrono. Sin embargo, cuenta con diferentes procesos y/o colas que se encargan de avisar cuando algún proceso asíncrono está listo.

El `Event Loop` se ejecuta al final, pero los procesos asíncronos no esperan a este. Es decir, los procesos asíncronos empiezan a ejecutarse en paralelo (o concurrentemente dependiendo de tu arquitectura) pero deben esperar a que el `Event Loop` se ejecute y verifique si ya finalizaron para poder volver al ambiente de tu código y continuar ejecutando aquellas secciones que estaban esperando la resolución de este proceso asíncrono.

Finalmente, el propósito del `Event Loop` es garantizar el comportamiento no bloqueante antes mencionado, de manera que tu código se ejecuta en un sólo hilo y las operaciones asíncronas se delegan a otros hilos para que al terminar de ejecutar tu código síncrono se ejecute el `Event Loop` y se verifique si aún hay operaciones o procesos pendientes.

### Manejo de paquetes/librerías/módulos

Node tiene una de las más grandes comunidades de desarrolladores debido al manejador de paquetes/módulos `npm`. Este manejador tiene su propia [página web](https://www.npmjs.com/) en la que se pueden publicar módulos y cualquier otra persona los puede descargar y utilizar inmediatamente.

Todo proyecto desarrollado para Node contiene un archivo en la carpeta principal llamado `package.json`. Este archivo es la configuración que se aplicará a tu proyecto. Dentro del archivo puedes encontrar las dependencias de tu proyecto, la versión de node necesaria para tu proyecto, el repositorio relacionado a tu proyecto, los autores, scripts o comandos utilizados en tu proyecto, y otras configuraciones que pueden encontrar [aquí](https://docs.npmjs.com/files/package.json).

Para poder incluir un módulo/paquete en tu proyecto simplemente debes ejecutar el comando:

```
$> npm install --save <the module>
```

Y todos los módulos se incluirán automáticamente en tu archivo de configuración (`package.json`).

Todos los módulos/paquetes que agregues serán almacenados en una carpeta que se creará automáticamente llamada `node_modules`. Debes recordar no incluir esta carpeta en tus repositorios (no hagas push de esta carpeta), pues suelen ser muy pesadas y la mejor forma de volver a descargarte todos los módulos es sencillamente ejecutando el comando:

```
$> npm install
```

De manera que cualquier persona que se descargue tu proyecto y quiera ejecutarlo, debe ejecutar el comando anterior para descargar todas las dependencias.

Una vez tengas incluidos/instalados todos los módulos/paquetes que necesites sólo debes usar la función `require` para acceder a ellos. Esta función se encargará de importar la dependencia que desees de tu carpeta `node_modules` o de la lista predefinida de dependencias de Node.

Ejemplo de uso de una dependencia:
```js
const axios = require('axios');
```

### Extensiones

Node está compuesto en un porcentaje por código en lenguaje C++ y otro porcentaje en lenguaje Javascript. Sabiendo esto es natural hacer la siguiente pregunta: Es posible agregar módulos desde lo más interno de Node?. Es posible. De hecho, existen diferentes módulos populares que deben ser compilados en C++ para poder ser utilizados en tu proyecto. Un ejemplo de esto es [Sass](https://www.npmjs.com/package/node-sass).

Para establecer una relación entre el código escrito en Javascript y C++ se utiliza la función `internalBinding` o anteriormente `process.binding`. Estas funciones se utilizan por todo el código de Node escrito en Javacript para ejecutar funciones en lenguaje C++.

## Dependencias principales

Node está compuesto de varias impportantes dependencias. Estas dependencias lo convierten en lo que es y se explican a continuación.

### V8

Debido a que Node ejecuta código escrito en Javascript debe tener un procesador del lenguaje. El V8 es precisamente eso, un procesador del lenguaje que se encarga de parsear y ejecutar tu código escrito en Javascript. Posteriormente Node se encargará de establecer las relaciones o referencias necesarias para poder acceder a las funcionalidades del sistema operativo.

Para poder establecer una relación entre tu código en Javascript y las funcionalidades del sistema operativo ya se explicó que existe una función encargada de ejecutar funciones escritas en lenguaje C++.

### libuv

Esta librería es la encargada de establecer un conjunto de hilos (thread pool) para hacer uso de las funcionalidades del sistema operativo de manera no bloqueante. Por defecto establece 4 hilos pero esto se puede modificar fácilmente.

Esta librería está escrita completamente en C++.

### Esquema de comunicación

En la siguiente imagen se ilustra la forma de comunicación que se realiza internamente entre Node y las dependencias:

![Esquema](https://github.com/ADDR2/LearnNode/blob/charla-1/Charla-1/Node-schema.png?raw=true)

## Event Loop

Imagina que el `Event Loop` es un `while` que tiene una condición de parada y un código interno que se ejecuta en cada iteración. La condición de parada sería que no haya ningún proceso asíncrono en espera. A continuación se ilustra un código que describe el proceso que realiza el `Event Loop`:

```js
function processWaiting() {
// Check for processes waiting.
}

while(processWaiting()) {
    timers();

    pendingCallbacks();

    idle();

    poll();

    check();

    closeCallbacks();
}
```