import styled from "styled-components";
import React from "react";

const Section = styled.section`
  background: #1f4a8a;
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  margin-bottom: 60px;
  opacity: 0.9;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #ccc;
    transform: translateX(-50%);
  }
`;

const Step = styled.div`
  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  margin: 40px 0;
  position: relative;
`;

const Content = styled.div`
  background: #eee;
  color: #0a2a5b;
  padding: 16px 20px; 
  border-radius: 8px;
  width: 40%;
  text-align: left;

  h3 {
    margin-top: 0; 
    margin-bottom: 8px;
  }

  p {
    margin: 0; 
    line-height: 1.5;
  }
`;

const Circle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 30px;
  height: 30px;
  background: white;
  border: 3px solid #1f4a8a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: #1f4a8a;
`;

function TimelineSelection() {
  const steps = [
    {
      title: "PRÉ-SELEÇÃO OU CONSULTA",
      text: "O cliente pode pré-selecionar os serviços desejados ou agendar uma consulta técnica inicial para planejamento e alinhamento de produção.",
    },
    {
      title: "SELEÇÃO DE SERVIÇOS E PAGAMENTO",
      text: "Escolha entre diferentes pacotes de gravação (hora, avulsa, mensal, trimestral, semestral) e outros serviços. Neste passo, o pagamento é realizado conforme o produto escolhido",
    },
    {
      title: "DESENVOLVIMENTO DO PROJETO EDITORIAL",
      text: "Para novos projetos, realizamos uma consultoria para desenvolver o projeto editorial, seguida pela gravação de um piloto. Para produtos já desenvolvidos, avance diretamente para o agendamento",
    },
    {
      title: "AGENDAMENTO E GRAVAÇÃO",
      text: "Agende sua gravação conforme disponibilidade de horários. Oferecemos sessões exclusivas pela manhã, tarde ou noite, dedicando total atenção à qualidade da gravação.",
    },
    {
      title: "PÓS-PRODUÇÃO E ENTREGA FINAL",
      text: "Após a gravação, nossa equipe de especialistas realiza a pós-produção, incluindo edição de áudio e vídeo. O produto final é entregue ao cliente de acordo com os padrões de qualidade estabelecidos, garantindo a satisfação total.",
    },
  ];

  return(
    <Section>
        <Title>Começe sua jornada Audiovisual!</Title>
        <Subtitle>Descubra como iniciar seu projeto audiovisual conosco, desde a consulta até a entrega final</Subtitle>

        <Timeline>
            {steps.map((step, index) => (
                <Step key={index} left={index % 2 === 1}>
                    <Circle>{index + 1}</Circle>
                    <Content>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </Content>
                </Step>
            ))}
        </Timeline>
    </Section>
  )
}

export default TimelineSelection;
