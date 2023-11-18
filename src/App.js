import logo from './logo.svg';
import Home from './views/Home';
import Menu from './views/Menu';
import Header from './components/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
