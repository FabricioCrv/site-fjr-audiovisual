import styled from "styled-components";

const Opcao = styled.li`
   font-size: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100%;
   padding: 0 15px; /* Aumentei o padding lateral */
   cursor: pointer;
   font-weight: 500; /* Peso da fonte médio */
   color: #333; /* Cor do texto */
   list-style: none; /* Remove os marcadores da lista */
   
   &:hover {
       color: #000; /* Escurece no hover */
       font-weight: 600;
   }
`
 
const Opcoes = styled.ul`
   display: flex;
   margin: 0;
   padding: 0;
   gap: 5px; /* Espaço entre as opções */
`
const opcoesTextos = ['Início', 'Sobre', 'Contato'];
function OpcoesHeader(){
    return(
        <Opcoes>
          {opcoesTextos.map((texto) => (
            <Opcao>{texto}</Opcao>
          ))}
        </Opcoes>
    )
}

export default OpcoesHeader;