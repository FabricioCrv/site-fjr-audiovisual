import styled from 'styled-components';
import OpcoesHeader from '../OpcoesHeader';
import Logo from '../Logo';



const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 80px; /* Altura fixa para o header */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra suave como na imagem */
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header;