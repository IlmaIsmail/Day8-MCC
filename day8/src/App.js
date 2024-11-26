 
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <AboutUs/>
        <ContactUs/>
      </header>
    </div>
  );
}

export default App;
