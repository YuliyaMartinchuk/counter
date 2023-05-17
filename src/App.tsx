import React from 'react';
import './App.module.css';
import {Display} from "./component/Display/Display";
import s from "./App.module.css"


function App() {

  return (
      <div className={s.App}>
        <Display />
      </div>
  );
}

export default App;
