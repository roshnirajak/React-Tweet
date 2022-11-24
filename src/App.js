import React from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {

  return (
    <div>
      <h1>Tweet</h1>
      <div className="contents">
        <Tweet />
      </div>
    </div>
  );
}

export default App;