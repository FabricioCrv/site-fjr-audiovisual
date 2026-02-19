import logoFjr from '../../images/logo-fjr.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 500px;
`
const LogoImage = styled.img`
    width: 240px;
    height: auto;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImage
            src={logoFjr}
            alt='logo da FJR audiovisual'/>
        </LogoContainer>
    );
}

export default Logo;