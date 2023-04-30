 import './App.css';
import Tagline from './Components/Tagline/Tagline';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import Signup from './Components/Signup/Signup';
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tagline/>
      <Features/>
      <Signup/>
      <Bottom/>
    </div>
  );
}

export default App;
