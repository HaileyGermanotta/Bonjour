import React from 'react';
import './App.css';
import Header from './components/Header'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="banner">
        <div className="banner-text">Initial Landing Impression</div>
      </div>
      <Article></Article>
      <Article></Article>
    </div>
  );
}

export default App;
