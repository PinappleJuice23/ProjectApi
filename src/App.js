import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Loading from './Loading';
import Characters from './Characters';
import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import CharacterDetails from './CharacterDetails';
import Documentation from './Documentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />   
        <Route path="/docs" element={<Documentation />} />                         
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
