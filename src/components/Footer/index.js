import styled from 'styled-components';
import LogoBranca from '../LogoBranca';

const FooterContainer = styled.footer`
    background-color: #1f4a8a;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 80px; /* Altura fixa para o header */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Sombra suave como na imagem */
`

function Footer(){
    return(
        <FooterContainer>
           <LogoBranca/>
        </FooterContainer>
    )
}

export default Footer;