# Explicando o Código

## Imports e Configuração dos Imports.
Importa a biblioteca 'Express' do Node
"import express from 'express';"
"const app = express();"

Ordeno que o express comece a entender e usar .json
"app.use(express.json());"

## Tipos de Rotas:
  **GET:** Buscar uma ou mais informações do back-end 
  **POST:** Criar uma nova informação no Back-End
  **PUT:** Atualizar uma informação existente no Back-End
  **DELETE:** Remover uma informação do Back-end

As rotas por padrão contem 1 Recurso e 1 função com 2 parametros.
**Recurso:** Qual entidade estamos acessando do sistema.
**Request:** Tudo aquilo que o usuario esta requisitando.
**Response:** Resposta da API para o usuario.

**Request Param:** Parâmetros que vem na própria rota que indentificam um recurso.
**Query Param:** São parâmetros que vem na própria rota que geralmente são opcionais para filtros, paginação.
**Request Body:** Parâmetros para criação e atualização de informações.

```
const users = [
    'Diego',   
    'Creiton', 
    'Robson',  
    'Victor',  
    'Pudim'    
];
```

**Criando uma rota Get**

```
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

**Criando uma rota GET com ID**
```
app.get('/users/:id', (request,response) => {
//Converte o parametro(params) passado dentro do RECURSO da rota (Nesse caso o :id) para INT
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});
```
**Criando uma rota Post**
```
app.post('/users', (request,response) => {
    const data = request.body;
    const user = {
        name : data.name,
        email: data.email
    }
    return response.json(user);
});
```


Comando para indicar que essa API está sendo executada na rota 3333
*app.listen(3333);*

