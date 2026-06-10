import { useState } from "react";
import styled from "styled-components";
import bannerPodGo from "../../images/estruturaFjr/bannerPodGo.webp"
import logoPodGo from "../../images/estruturaFjr/logoPodGo.webp"


const LogoTitle = styled.img`
  max-width: 420px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

const Hero = styled.section`
  position: relative;
  height: 720px;
  overflow: hidden;
  background: #002855;

  @media (max-width: 768px) {
    height: 620px;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 60%;
  height: 100%;
  object-fit: cover;
  object-position: 30% center;
`;


const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 40, 85, 0.15) 0%,
    rgba(0, 40, 85, 0.9) 55%,
    #002855 100%
  );

  @media (max-width: 768px) {
    background: rgba(0, 40, 85, 0.75);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 640px;
  margin-left: auto;
  padding: 220px 140px 0 0;
  color: #fff;

  @media (max-width: 768px) {
    margin: 0;
    padding: 180px 32px 0;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 20px 0;
  opacity: 0.7;
`;

const Subtitle = styled.p`
  font-size: 28px;
  line-height: 1.1;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  margin-top: 24px;
  background: #164b8f;
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 18px 70px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const Arrow = styled.button`
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 32px;
  cursor: pointer;
`;

const ArrowLeft = styled(Arrow)`
  left: 20px;
`;

const ArrowRight = styled(Arrow)`
  right: 20px;
`;

const slides = [
    {
        title: logoPodGo,
        subtitle: "Grave seu podcast no seu espaço com os melhores especialista e equipamentos!",
        image: bannerPodGo,
        button: "Entre em contato!"
    }
];

function BannerCarousel(){
    const [current, setCurrent] = useState(0);

    const slide = slides[current];

    function nextSlide(){
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    function prevSlide() {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }

    return (
        <Hero>
        <HeroImage src={slide.image} alt={slide.title} />

        <Overlay />

        <Content>
            <LogoTitle src={slide.title} alt="Pod To Go"></LogoTitle>
            <Line />
            <Subtitle>{slide.subtitle}</Subtitle>
            <Button>{slide.button}</Button>
        </Content>

        <ArrowLeft onClick={prevSlide}>‹</ArrowLeft>
        <ArrowRight onClick={nextSlide}>›</ArrowRight>
        </Hero>
  );
}

export default BannerCarousel;