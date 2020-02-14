import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from './App.module.css';
import VirusInfoMap from './containers/VirusInfoMap/VirusInfoMap';
import CaseUpdater from './containers/CaseUpdater/CaseUpdater'

function App() {
  return (

    <div className={styled.app}>
      <VirusInfoMap></VirusInfoMap>
      <CaseUpdater></CaseUpdater>
    </div>
  );
}

export default App;
