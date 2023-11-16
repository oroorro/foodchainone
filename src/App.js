import logo from './logo.svg';
import Home from './views/Home';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
    </>
  );
}

export default App;
