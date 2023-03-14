import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
