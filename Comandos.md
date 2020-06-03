# Lista de Comandos

## Back-End
### Comandos Basicos do Node
- **npm init -y**
    Inicializa o projeto criando a pasta node_modules (Ultilize dentro da pasta do projeto.);
- **npm run "script"**
    Executa os scripts configurados no package.json
- **npx ts-node './path-of-file/file.ts**
    Faz o node executar um arquivo .TS.
    *Obs: Necessita fazer a instalação e configuração do Typescript no Node*
### Comandos para Instalar Libs
- **npm install express**
    Instala a LIB de Rotas do Node.JS
- **npm install cors**
    Permite que sua API seja acessada por links externos.

### Comandos Typescripts
- **npm install typescript**
    Instala o Typescript no node para ser usado.
- **npm install @types/'nome da Lib'**
    Instala a tipificação da Lib para o Typescript.
- **npm install ts-node**
    Biblioteca que faz o Node entender o Typescript.
- **npx tsc --init**
    Cria o arquivo de configuração do Typescript
- **npm install ts-node-dev**
    Comando para instalar o observador de modificação doss arquivos, para que sejam recarregados automaticamente.
- **ts-node-dev --ignore node_modules "./path-of-file/file.ts"**
    Executa o arquivo .TS e deixa o servidor ficar monitorando as mudanças.

### Comandos do Banco Knex
- **npm install knex**
    Instala o banco Knex
- **npm install sqlite3**
    Instala o SQLite3 no Node
- **npx knex --knexfile "caminho do knexfile.ts migrate:latest"**
    Executa as Migrations da pasta, usando o arquivo de conexão knexfile




## Front-End

- **npx create-react-app "nome do projeto" --template=typescript**
    Cria um projeto React dentro da pasta com o "nome do projeto" com o template do typescript embutido.




