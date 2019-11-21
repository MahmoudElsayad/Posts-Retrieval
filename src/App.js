import React from 'react';
import './App.css';
import Search from './components/Search';
import Posts from './components/Posts';
import Options from './components/Options';

function App() {
  return (
    <div className="app">
      <Search />
      <Options viewCreate={false}/>
      <Posts />
    </div>
  );
}

export default App;
