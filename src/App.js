import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Page} from './styles';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {GlobalStyle} from "./Globalstyle"
import Aulas from './Components/Aulas';
import Treino from './Components/Treino';
import Agenda from './Components/Agenda';

function App() {
  return (
    <BrowserRouter>
      <Page>
        <GlobalStyle/>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/aulas" element={<Aulas />}/>
            <Route path="/treino" element={<Treino />}/>
            <Route path="/agenda" element={<Agenda />}/>
          </Routes>
        <Footer/>
      </Page>
    </BrowserRouter>
  );
}

export default App;
