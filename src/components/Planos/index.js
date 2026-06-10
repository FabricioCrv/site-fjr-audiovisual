import React from "react";
import styled from "styled-components";
import { Mic, Target, Rocket } from "lucide-react";

function Planos() {
  const plans = [
    {
      icon: <Mic />,
      title: "Start",
      items: ["1 Gravação por mês", "1 Episódio editado"],
    },
    {
      icon: <Target />,
      title: "Pro",
      items: ["2 Gravações por mês", "2 Episódios editados", "4 Cortes para shorts"],
    },
    {
      icon: <Rocket />,
      title: "Autoridade",
      items: ["4 Episódios por mês", "12 Cortes para shorts", "Thumbnail customizada"],
    },
  ];

  return (
    <Section>
      <Title>Nossos Planos</Title>

      <PlansGrid>
        {plans.map((plan) => (
          <PlanCard key={plan.title}>
            <IconBox>{plan.icon}</IconBox>
            <PlanTitle>{plan.title}</PlanTitle>

            <Benefits>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Benefits>
          </PlanCard>
        ))}
      </PlansGrid>

      <a href="https://api.whatsapp.com/send/?phone=5585991845926&text&type=phone_number&app_absent=0" target="_blank">
        <Button>Fale Conosco</Button>
      </a>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 0 24px 6px;
  text-align: center;
  background: #fff;
  color: #00275c;
`;

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: 36px;
  color: #062d64;
`;

const PlansGrid = styled.div`
  max-width: 980px;
  margin: 0 auto 68px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 72px;
`;

const PlanCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
  color: #062d64;
  margin-bottom: 24px;

  svg {
    width: 120px;
    height: 120px;
    stroke-width: 2.8;
  }
`;

const PlanTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 800;
  color: #00275c;
`;

const Benefits = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 1.6;
    color: #00275c;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
      color: #00275c;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 263px;
  height: 45px;
  border: none;
  border-radius: 999px;
  background: #2d58a1;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #244a8b;
  }
`;

export default Planos;