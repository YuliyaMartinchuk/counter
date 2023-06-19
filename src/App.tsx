import React from 'react';
import './App.module.css';
import s from "./App.module.css"
import {DisplayWithRedux} from "./component/WithRedux/Display/DisplayWithRedux";


function App() {

  return (
      <div className={s.App}>
        <DisplayWithRedux />
      </div>
  );
}

export default App;
