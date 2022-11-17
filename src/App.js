import React from 'react';
import './App.css';
import Tweet from './Tweet';

function App(){

  return(
    <div>
      <h1>Tweet</h1>
      <div class="contents">
      <Tweet uname="meow" content="purraaaw"/>
      <Tweet uname="fart" content="I hate Elon Musk"/>
      <Tweet uname="litchi" content="I like to drink myself"/>
    </div>
    </div>
  );
}

export default App;