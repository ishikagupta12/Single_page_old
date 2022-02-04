import { Routes , Route } from 'react-router-dom';
import './App.css';
import  Home from './pages/Home';
import  Contact  from './pages/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </>

  );
}

export default App;
