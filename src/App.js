import logo from './logo.svg';
import Home from './views/Home';
import Menu from './views/Menu';
import Builder from './views/Builder';
import Header from './components/Header';
import Catering from './views/Catering';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>} />
    <Route path="/builder" element={<Builder/>} />
    <Route path="/catering" element={<Catering/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
