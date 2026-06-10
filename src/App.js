import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import DescricaoSobre from './components/DescricaoSobre';
import EstruturaFjr from './components/estruturaFjr';
import TimelineSelection from './components/TimelinePassoAPasso';
import ExplicacaoStudio from './components/ExplicacaoStudio';
import Footer from './components/Footer';
import Planos from './components/Planos';
import CarrouselOfertas from './components/CarrouselOfertas'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #FFF 35%);

li {
  list-style: none;
}
  `

function App() {
  return (
    <AppContainer>
      <Header/>
      <CarrouselOfertas/>
      <DescricaoSobre/>
      <EstruturaFjr/>
      <ExplicacaoStudio/>
      <TimelineSelection/>
      <Planos/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
