import React from 'react';
import styled from './App.module.css';
import Map from './containers/Map/Map';
import CaseUpdater from './containers/CaseUpdater/CaseUpdater'

function App() {
  return (
    <div className={styled.app}>
      <Map></Map>
      <CaseUpdater></CaseUpdater>
    </div>
  );
}

export default App;
