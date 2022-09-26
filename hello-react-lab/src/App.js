import './App.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Grid from './components/Grid';
import Logo from './logo.svg';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Grid />
    <img src={Logo} alt="logo" className="logo"/>

    </div>
  );
}

export default App;
