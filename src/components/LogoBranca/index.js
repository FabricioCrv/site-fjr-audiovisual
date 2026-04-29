import styled from 'styled-components';
import logoBranca from '../../images/logo-branca-fjr.png';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 500px;
`
const LogoImage = styled.img`
    width: 240px;
    height: auto;
`


function LogoBranca(){
    return(
        <LogoContainer>
            <LogoImage
            src={logoBranca}
            alt='logo da FJR audiovisual'/>
        </LogoContainer>
    )
        
}

export default LogoBranca;