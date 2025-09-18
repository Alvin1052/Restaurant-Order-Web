import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login';
import Home from './pages/home';
import Detail from './pages/details';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/restaurant/:restoId' element={<Detail />} />
      {/* <Route path='/cart' element={<Cart />} /> */}
      {/* <Route path='/checkout' element={<Checkout />} /> */}
      {/* <Route path='/order' element={<Orders />} /> */}
    </Routes>
  );
}

export default App;
