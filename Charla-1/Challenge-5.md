# Challenge - 5 de la charla 1

Dado el siguiente código:

```js
setTimeout(console.log, 0, "First log");

const promise = new Promise(resolve => {
    setTimeout(() => (console.log("Second log"), resolve()), 0);
});

for(let i = 0; i < 100; i++) {
    promise.then(
        () => console.log(`Log ${i}`)
    );
}

setTimeout(console.log, 0, "Third log");
```

Responda las siguientes preguntas:

```
* Cuál será el resultado impreso en consola?
* Por qué?
```