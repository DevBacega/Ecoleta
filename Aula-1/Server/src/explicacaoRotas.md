# Explicando o Código

## Imports e Configuração dos Imports.
Importa a biblioteca 'Express' do Node
<br>
`import express from 'express';`
<br>
`const app = express();`
<br>
Ordeno que o express comece a entender e usar .json
<br>
`app.use(express.json());`

## Tipos de Rotas:
  **GET:** Buscar uma ou mais informações do back-end 
<br>
  **POST:** Criar uma nova informação no Back-End
<br>
  **PUT:** Atualizar uma informação existente no Back-End
<br>
  **DELETE:** Remover uma informação do Back-end
<br>
As rotas por padrão contem 1 Recurso e 1 função com 2 parametros.
<br>
**Recurso:** Qual entidade estamos acessando do sistema.
<br>
**Request:** Tudo aquilo que o usuario esta requisitando.
<br>
**Response:** Resposta da API para o usuario.
<br>
<br>
**Request Param:** Parâmetros que vem na própria rota que indentificam um recurso.
<br>
**Query Param:** São parâmetros que vem na própria rota que geralmente são opcionais para filtros, paginação.
<br>
**Request Body:** Parâmetros para criação e atualização de informações.
&nbsp;

```Javascript
const users = [
    'Diego',   
    'Creiton', 
    'Robson',  
    'Victor',  
    'Pudim'    
];
```
<br>
**Criando uma rota Get**
```Javascript
app.get('/users', (request, response) => {
    //Converte em String a Query envianda pelo Recurso da rota.
    const search = String(request.query.search);
    //Função que checa se search contem valor, se verdadeiro, filtra os usuarios
    // usando Query Paramns (seach) como filtro, e retorna os valores que condizem.
    // Caso a Search for vazia, retorna o array todo.
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    //Enviando a resposta para o usuario em formato JSON
    response.json(filteredUsers);
});
```
<br>
**Criando uma rota GET com ID**
```Javascript
app.get('/users/:id', (request,response) => {
//Converte o parametro(params) passado dentro do RECURSO da rota (Nesse caso o :id) para INT
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});
```
<br>
**Criando uma rota Post**
```Javascript
app.post('/users', (request,response) => {
    const data = request.body;
    const user = {
        name : data.name,
        email: data.email
    }
    return response.json(user);
});
```
<br>
Comando para indicar que essa API está sendo executada na rota 3333
<br>
`app.listen(3333);`

