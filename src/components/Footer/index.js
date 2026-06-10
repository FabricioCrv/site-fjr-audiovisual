import styled from "styled-components";
import LogoBranca from "../LogoBranca";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #1f4a8a;
  color: #fff;
  padding: 40px 60px 20px;
`;

const Link = styled.a`
  color: #fff;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.5fr 1fr;
  align-items: start;
  gap: 60px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`;

export const Title = styled.h4`
  margin-bottom: 15px;
  font-size: 18px;
`;

const Text = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 6px 0;
  font-size: 14px;

  svg {
    min-width: 16px;
    margin-top: 3px;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 30px;
  padding-top: 15px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <LogoBranca />
        </Column>

        <Column>
          <Title>Menu</Title>
          <Text>Início</Text>
          <Text>Sobre</Text>
          <Text>Blog</Text>
          <Text>Contato</Text>
        </Column>

        <Column>
            <Title>Contatos</Title>
            <Text><FaPhoneAlt/> 85 99184-5926</Text>
            <Text> <Link href="https://api.whatsapp.com/send/?phone=5585991845926&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><FaWhatsapp/></Link>85 99184-5926</Text>
            <Text><FaEnvelope/> contato@fjraudiovisual.com.br</Text>
            <Text>
                <FaMapMarkerAlt />
                <span>
                Avenida Coronel Miguel Dias, 50
                Sl 701, Fortaleza, Brazil
                </span>
            </Text>
        </Column>

        <Column>
            <Title>Redes Sociais</Title>
            <div style={{ display: "flex", gap: "15px", marginTop: "10px"}}>
                <FaInstagram/>
                <FaYoutube/>
                <FaFacebook/>
            </div>
        </Column>
      </FooterContent>

      <BottomBar>
        <span>
          FJR - Produções Audiovisuais © 2026 Todos os direitos reservados.
        </span>
      </BottomBar>
    </FooterContainer>
  );
}

export default Footer;