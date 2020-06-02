import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuário');

    response.json([
        'Diego',
        'Creiton',
        'Robson',
        'Victor',
        'Pudim'
    ]);
});

app.listen(3333);

