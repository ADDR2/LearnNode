# Challenge - 2 de la charla 1

Dado el siguiente código:

```js
const { readFile } = require('fs');

function someAsyncOperation(callback) {
  readFile("./Charla-1/Non-Blocking-Chart.png", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 10);


someAsyncOperation(() => {
  const startCallback = Date.now();

  while (Date.now() - startCallback < 10);
});
```

Responda las siguientes preguntas:

```
* Cuál será el mensaje impreso?
* Por qué?
```