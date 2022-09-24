import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  const social = [
    { id: "1", link: "#", name: "Facebook" },
    { id: "2", link: "#", name: "Twitter" },
    { id: "3", link: "#", name: "Portfolio" }
  ]
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer social={social} />
    </div>
  );
}

export default App;
