//Importa a biblioteca 'Express' do Node
import express from 'express';
const app = express();


/* 
Cria uma rota do tipo GET.
As rotas por padrão contem 1 função com 2 parametros
Request: Tudo aquilo que o usuario esta requisitando.
Response: Resposta da API para o usuario.
*/
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

//Comando para indicar que essa API está sendo executada na rota 3333
app.listen(3333);

