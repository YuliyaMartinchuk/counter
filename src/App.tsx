import React from 'react';
import './App.module.css';
import {Display} from "./component/Display/Display";
import k from "./App.module.css"


function App() {

  return (
      <div className={k.App}>
        <Display />
      </div>
  );
}

export default App;
