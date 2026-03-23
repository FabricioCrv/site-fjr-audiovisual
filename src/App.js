import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import DescricaoSobre from './components/DescricaoSobre';
import EstruturaFjr from './components/estruturaFjr';
import TimelineSelection from './components/TimelinePassoAPasso';
import ExplicacaoStudio from './components/ExplicacaoStudio';

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
      <DescricaoSobre/>
      <EstruturaFjr/>
      <ExplicacaoStudio/>
      <TimelineSelection/>
    </AppContainer>
  );
}

export default App;
