 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
       
        <Home/>
        <AboutUs/>
        <ContactUs/>
      
    </div>
  );
}

export default App;
