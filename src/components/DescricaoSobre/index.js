import React, { useState, useEffect } from "react";
import styled from "styled-components";

import microfoneFjr from "../../images/interiorFjr/microfoneFjr.png";
import orientacaoFjr from "../../images/interiorFjr/orientacaoFjr.png";
import salaEscuraFjr from "../../images/interiorFjr/salaEscuraFjr.png";
import salaFjr from "../../images/interiorFjr/salaFjr.png";

const SectionContainer = styled.section`
  max-width: 1400px;
  margin: 80px auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const CarrosselWrapper = styled.div`
  flex: 0 0 45%; /* Ocupa 45% do espaço, não cresce nem encolhe */
  max-width: 500px; /* Tamanho máximo para a imagem não ficar muito grande */

  @media (max-width: 968px) {
    flex: 0 0 auto;
    max-width: 100%;
    width: 100%;
  }
`;

const CarrosselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px; /* Altura reduzida */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarrosselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const TextoWrapper = styled.div`
  flex: 1;
`;

const Titulo = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #0a2a5b;
  margin-bottom: 25px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Descricao = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #000000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

function DescricaoSobre() {
  const [currentImage, setCurrentImage] = useState(0);

  const imagens = [microfoneFjr, orientacaoFjr, salaEscuraFjr, salaFjr];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagens.length]);

  return (
    <SectionContainer>
      <ContentWrapper>
        <CarrosselWrapper>
          <CarrosselContainer>
            {imagens.map((img, index) => (
              <CarrosselImage
                key={index}
                src={img}
                alt={`Estúdio FJR - Imagem ${index + 1}`}
                active={index === currentImage ? 1 : 0}
              />
            ))}
          </CarrosselContainer>
        </CarrosselWrapper>

        <TextoWrapper>
          <Titulo>
            Inovação e Qualidade <br />
            em Audiovisual
          </Titulo>

          <Descricao>
            Inaugurado em maio de 2023, o estúdio FJR Audiovisual surgiu para
            suprir a crescente demanda por produções de áudio e vídeo
            impulsionada pela expansão das redes sociais. Localizado
            estrategicamente ao lado do Iguatemi, oferecemos uma estrutura de
            última geração para atender desde pequenos empreendedores até
            grandes produções. 
          </Descricao>

          <Descricao>
            Nosso estúdio é um hub de criatividade e inovação, pronto para
            acolher projetos variados como podcasts, cursos online, campanhas
            políticas e muito mais, garantindo uma produção de alta qualidade
            que atende às necessidades de um público diversificado.
          </Descricao>
        </TextoWrapper>
      </ContentWrapper>
    </SectionContainer>
  );
}

export default DescricaoSobre;
