import styled from "styled-components"

import estudioFjr from "../../images/estruturaFjr/estudioFjr.png"
import gravacaoFjr from "../../images/estruturaFjr/gravacao.png"
import podfalarFjr from "../../images/estruturaFjr/podfalarFjr.png"
import salaFjr from "../../images/estruturaFjr/salaFjr.png"
import salaDoisFjr from "../../images/estruturaFjr/salaDoisFjr.png"
import salaTresFjr from "../../images/estruturaFjr/salaTresFjr.png"
import telaVerdeFjr from "../../images/estruturaFjr/telaVerdeFjr.png"
import testeGravacao from "../../images/estruturaFjr/testandoGravacao.png"

const SectionContainer = styled.section`
    max-width: 1400px;
    margin: 80px auto;
    padding: 0 20px;
`

const Titulo = styled.h2`
    font-size: 48px;
    font-weight: 600;
    color: #0a2a5b;
    margin-bottom: 50px;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 36px;
        margin-bottom: 30px;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    aspect-ratio: 4/3; /* Proporção da imagem */
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    }
`

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${Card}:hover & {
        transform: scale(1.05);
    }
`

const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 20px 15px 15px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    
    ${Card}:hover & {
        transform: translateY(0);
    }
`

const NomeEspaco = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`

function EstruturaFjr(){
    const estrutura = [
        {imagem: estudioFjr, nome: "Sala de gravação"},
        {imagem: gravacaoFjr, nome: "Gerenciamento de gravação"},
        {imagem: podfalarFjr, nome: "Espaço podcast" },
        {imagem: salaFjr, nome: "Sala 1" },
        {imagem: salaDoisFjr, nome: "Sala 2" },
        {imagem: salaTresFjr, nome: "Sala 3" },
        {imagem: telaVerdeFjr, nome: "Estúdio com Tela Verde" },
        {imagem: testeGravacao, nome: ""}
    ];

    return(
        <SectionContainer>
            <Titulo>Nossa Estrutura</Titulo>

            <GridContainer>
                {estrutura.map((item, index) => (
                    <Card key={index}>
                        <Imagem
                            src={item.imagem}
                            alt={item.nome}
                        />
                        <Overlay>
                            <NomeEspaco>{item.nome}</NomeEspaco>
                        </Overlay>
                    </Card>
                ))}
            </GridContainer>
        </SectionContainer>
    )
}

export default EstruturaFjr;