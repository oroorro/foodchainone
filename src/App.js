
import Home from './views/Home';
import Menu from './views/Menu';
import Builder from './views/Builder';
import Catering from './views/Catering';
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/menu" element={<Menu/>} />
    <Route path="/builder/:product" element={<Builder/>} />
    <Route path="/catering" element={<Catering/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
