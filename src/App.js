// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Meme from './Components/Meme';

function App() {
  return (
    <div>
      <Header img-alt="troll face"/>
      <div className="container">
      <Meme />
      </div>
    </div>
  );
}

export default App;
