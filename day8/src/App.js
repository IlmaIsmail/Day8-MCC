 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
       
        <Router>
            <nav>
               
                 <Link to='/home'>Home</Link><br/>
                 <Link to='/about'>About Us</Link><br/>
                 <Link to='/contact'>Contact Us</Link> <br/>
               
            </nav>



          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
