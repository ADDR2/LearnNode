# Challenge - 3 de la charla 1

El siguiente código mostrará el valor `undefined` al ser ejecutado:

```js
let value;

console.log(value);

value = 3;
```

Modifique el código de manera que muestre el valor `3` manipulando el `Event Loop` pero sin utilizar timers ni cualquier función que esté obligada a ejecutarse en alguna fase del `Event Loop`.