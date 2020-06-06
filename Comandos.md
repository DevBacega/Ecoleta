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
- **npm install multer**
    Lib para fazer upload de arquivos.
- **npm install celebrate**
    Lib para fazer validação de campos no back-end

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
- **npm install react-icons**
    Instala os pacotes de Icones mais famoso da internet.
- **npm install react-router-dom**
    Instala o pacote de rotas do React
- **npm install leaflet react-leaflet**
    Biblioteca para manipulação de mapa geografico open source.


## Mobile Expo

- **yarn add global expo-cli**
    Instala o Expo como Global, assim temos acesso em qualquer parte do PC
- **expo install expo-font**
    Instalação do expo-font.
- **expo @expo-google-fonts/'fonte desejada**
    Comando para instalar fontes no Expo
- **yarn add @react-navigation/native**
    Lib para criar as rotas no react native
- **expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view**
    Instala as libs de interação do usuario.
- **yarn add @react-navigation/stack**
    Lib para fazer o caminho das rotas no Native
- **expo install react-native-maps**
    Lib para usar mapas no React Native
-**expo install expo-constants**
    PESQUISAR
-**expo install react-native-svg**
    Lib para o React Native conseguir ler SVG
-**expo install expo-location**
    Biblioteca para usar geolocalização no app
-**expo install expo-mail-composer**
    Lib para trabalhar com Email.