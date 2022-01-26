import {Page} from './styles';
import './App.css';
import Header from './Components/Header';
import MenuPrincipal from './Components/MenuPrincipal';
import Footer from './Components/Footer';

function App() {
  return (
    <Page>
      <Header/>
      <MenuPrincipal/>
      <Footer/>
    </Page>
  );
}

export default App;
