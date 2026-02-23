import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import DescricaoSobre from './components/DescricaoSobre';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #FFF 35%, #326589);

li {
  list-style: none;
}
  `

function App() {
  return (
    <AppContainer>
      <Header/>
      <DescricaoSobre/>
    </AppContainer>
  );
}

export default App;
