import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/SideBar';
import Feed from './components/feed/Feed';

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app_body'>
        <div className='columSpace'></div>
        <Sidebar />
        <Feed />
        <div className='columSpace'></div>
      </div>
    </div>
  );
}

export default App;
