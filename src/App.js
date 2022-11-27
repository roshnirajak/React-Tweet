import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet';
import Menu from './array_api';

const App = () => {
const [menuData, setMenuData]= useState(Menu); 
  return (
    <>
      <h1>Tweet</h1>
        <Tweet menuData={menuData} />
    </>
  );
}

export default App;