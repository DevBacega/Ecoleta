import React ,{useState} from 'react';
import './App.css';

//JSX: Sintaxe do XML dentro do Javascript

import Header from './Header';

function App() {

  //Os States servem para preservar o stado da variavel e para alterarmos uma variavel chamada
  //dentro do HTML, precisamos declarar um Array contendo [Valor, FunctAlterarValor] recebendo
  //o valor inicial.
  const [counter, setCounter] = useState(5);

  //Assim para alterar o State, invocamos a função criada no array e colocamos o que ela tem q alterar
  //o State e em seguida é exibido na tela!
  function handleButtonClick(){
    setCounter(counter + 2);
  }



  return (
    <div>
      {/* Ao chamarmos o componente, passamos a propriedade nele usando o mesmo nome declarado
      no Obj criado nas Props. */}
      <Header title="Hello World" />
      <h1>{counter * 10}</h1>
      

      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
 