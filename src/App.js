import './App.css';
import Marvel from './components/Marvel';
import Header from './components/Header';
import Navbar from './components/Navbar';
import DC from './components/DC';

function App() {
  return (
    <div>
      <h1 id='logo'>Heroes</h1>
      <Header/>
      <Navbar />
      <Marvel />
      <DC />
    </div>
  );
}

export default App;
