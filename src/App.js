import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from './App.module.css';
import VirusInfoMap from './containers/VirusInfoMap/VirusInfoMap';
import DropDown from './components/UI/dropDown/dropDown'

function App() {
  return (

    <div className={styled.app}>
      <VirusInfoMap></VirusInfoMap>
      <DropDown></DropDown>
    </div>
  );
}

export default App;
