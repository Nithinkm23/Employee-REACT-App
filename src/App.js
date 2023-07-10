import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/view' element={<Viewdata />}/> 
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
