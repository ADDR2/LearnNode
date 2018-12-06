# Challenge - 4 de la charla 1

Durante el desarrollo de este proyecto se crearon los siguientes archivos:

```js
const dataForModel = [
    {
        username: 'John',
        middlename: 'Doe',
        company: 'Teravision S.A.S'
    },
    null
];

const makeImportantQuery = () => dataForModel[0];

const restOfData = () => dataForModel.slice(1);

module.exports = {
    makeImportantQuery,
    restOfData
};
```

```js
const dbHandler = require('./dbHandler');

class Model {
    constructor() {
        this.modelData = dbHandler.makeImportantQuery();
    }

    getData() {
        return this.modelData;
    }
}

module.exports = new Model();
```

Posteriormente se exigió crear pruebas unitarias, pero el resto del equipo no supo cómo hacer una prueba para el constructor de la clase. Por esta razón, se requiere que usted cree una prueba unitaria para el constructor que verifique que la función `makeImportantQuery` se ejecute cada vez que se ejecute el constructor. Para ello sólo puede usar las siguientes herramientas: `Mocha`, `Chai` y `Sinon`.

Ayuda: Puede crear otros archivos, y sólo puede modificar el código dentro del constructor. No modifique los `exports`.