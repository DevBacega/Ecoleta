# Banco de Dados

## Instalando
Para começar a criar o DB em SQLITE3 precisa instalar o Knex e o Sqlite3

    npm install knex
    npm install Sqlite3

## Estrutura das Pastas e Arquivos

Dentro da /SRC é criado uma pasta chamada **database** e dentro dela é criado a pasta das **Migrations**

### Arquivo Connection
No arquivo Connection, é feito o método para conexão do Knex ao Sqlite3

temos um objeto chamado conexão que recebe um método `knex()` contendo `cliente` que é o tipo do banco, no caso a baixo é usado o `sqlite3` e temos o `connection` que vamos definir aonde o banco sera criado.
**Obs:** temos que importar a biblioteca `knex` e `path`. A `path` é usada para concatenar as pastas e assim virar um caminho, para padronizar e não ter que mudar de acordo com o O.S, exemplo é ali no `path.resolve`

    import knex from 'knex';
    import path from 'path';
    const connection = knex({
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database.sqlite' ),
        },
        useNullAsDefault: true,
    });
    export default connection;

### Migrations
As migrations são um método do Knex para entender o que tem que ser criado no banco de dados, cada migration contem 2 métodos principais que são:
- Up
> Dentro dele é colocado tudo o que tem q ser criado no banco de dados.
> Ex: tabelas, inserts, selects e tudo mais.

- Down
> Já o Down é ao contrário do UP, tudo o que for feito na UP é desfeito na DOWN, criei uma tabela na UP, dou drop na DOWN

### Criando as Migrations
Dentro da pasta migrations, vamos criar os arquivos .TS que irá gerar nossas tabelas, porem ao rodarmos o comando para gerar o banco, ele irá executar na ordem dos arquivos da pasta, por isso colocar sempre um numero identificador na frente Ex: **00** *_nomedatabela.ts*. Cuidado com tabelas Pivot pois elas tem que ser sempre as ultimas, pois temos que criar as tabelas que irão fazer a ligação primeiro, para depois ela.

***Exemplo de criação de migration***

    import Knex from 'knex';
    export async function up(knex : Knex){
        return knex.schema.createTable('points', table => {
            table.increments('id').primary();
            table.string('image').notNullable ();
            table.string('name').notNullable ();
            table.string('email').notNullable ();
            table.string('whatsapp').notNullable ();
            table.decimal('latitude').notNullable();
            table.decimal('longitude').notNullable();
            table.string('city').notNullable ();
            table.string('uf',2).notNullable ();
        })
    }
    export async function down(knex : Knex){
        return knex.schema.dropTable('point');   
    }


## Knexfile.ts

O Knexfile ele fica na raiz do Server *./server*. Esse arquivo vai conter a conexão do banco e também um método chamado migrations aonde vai indicar a pasta das migrations para ele criar no banco.

    import path from 'path';
    module.exports = {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname,'src','database', 'database.sqlite' ),
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        useNullAsDefault: true,
    };

## Executando o Knex para criar o banco.

Após configurar o `connection.ts` o `knexfile.ts` e também as `migrations`
usamos o comando:

    npx knex migrate:latest --knexfile knexfile.ts migrate:latest
   *Obs: você pode criar um script no ***package.json*** para executar esse comando mais rápido*