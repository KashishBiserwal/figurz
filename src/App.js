import './App.css';
import Marvel from './components/Marvel';
import Header from './components/Header';
import Navbar from './components/Navbar';
import DC from './components/DC';
import React from 'react';
import Content from './components/Content';
function App() {

  
  return (
    <div>
      <div id='logo'>Logo</div>
      <Header/>
      <Content />
      <Navbar />
      <Marvel />
      <DC />
    </div>
  );
}

export default App;
