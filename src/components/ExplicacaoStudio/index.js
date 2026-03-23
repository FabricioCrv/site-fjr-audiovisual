import styled from "styled-components";

import aluguelStudio from "../../assets/aluguel-studio.svg";
import audioVisual from "../../assets/audiovisual.svg";
import studio from "../../assets/studio.svg";
import gerente from "../../assets/gerente.svg";
import podcast from "../../assets/podcast.svg";
import videoTutorial from "../../assets/video-tutorial.svg";

const Section = styled.section`
  background: #f4f4f4;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 60px;
  color: #123a6f;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 40px 20px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 190px;
    height: 100px;
    color: #123a6f;
    stroke-width: 1.5;
  }
`;

const CardTitle = styled.h3`
  color: #123a6f;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #444;
  max-width: 300px;
  margin: 0;
`;

function ExplicacaoStudio() {
  const services = [
    {
      icon: aluguelStudio,
      title: "ALUGUEL DE ESTÚDIO",
      text: "Disponibilizamos o estúdio para gravação e transmissão de conteúdio criativo, equipado com tecnologia de ponta.",
    },
    {
      icon: audioVisual,
      title: "CONSULTORIA TÉCNICA EM PRODUÇÃO AUDIOVISUAL",
      text: "Nossa equipe de especialistas proporciona consultoria para otimizar suas produções, garantindo resultados excepcionais.",
    },
    {
      icon: gerente,
      title: "GESTÃO DE PRODUÇÃO",
      text: "Prestamos serviços completos de gestão administrativa para facilitar a produção de seus projetos audiovisuais.",
    },
    {
      icon: podcast,
      title: "GRAVAÇÃO DE PODCASTS",
      text: "Proporcionamos um ambiente ideal para a gravação de podcasts, com suporte técnico completo e equipamentos de última geração. ",
    },
    {
      icon: studio,
      title: "EDIÇÃO DE PRODUTOS AUDIOVISUAIS",
      text: "Oferecemos serviços de edição de alta qualidade para transformar seu conteúdo bruto em produções polidas",
    },
    {
      icon: videoTutorial,
      title: "GRAVAÇÃO DE CURSOS",
      text: "Especializados na gravação de cursos online, oferecemos soluções completas desde a captação até a edição final, adaptadas para educadores e profissionais.",
    },
  ];

  return(
    <Section>
      <Title>Produção de Podcast e Muito Mais</Title>

      <Grid>
        {services.map((item, index) => (
          <Card key={index}>
            <IconWrapper> <img src={item.icon}/></IconWrapper>
            <CardTitle>{item.title}</CardTitle>
            <Text>{item.text}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}

export default ExplicacaoStudio;
