import './App.css';
import Nav from './component/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Checkout from './component/Checkout';
import State from './component/context/State'

function App() {

  return (
    <>
    <State>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </State> 
    </>
  );
}

export default App;
