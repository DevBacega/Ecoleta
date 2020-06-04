import React from 'react';

//Propriedades: são as propriedades que colocamos para o componente, para isso criamos uma interface
// e dentro dela, em forma de Objeto colocamos as propriedades e os tipos que ela ira receber.
interface HeaderProps{
    //Sem ? no nome deixa obrigatório, com o ? deixa alternada
    title:string;
}


//No componente falamos que o tipo dele é a Prop que criamos assim obrigando ele a ter as Props.
const Header: React.FC<HeaderProps> = (props) => {
//Dentro do componente, para termos acesso aas Props basta colocarmos um parametro na função que esse
//ira receber o valor dos atributos que colocamos no HTML ao chamar o componente.
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
};


export default Header;

