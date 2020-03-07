import React, { useState } from 'react';
import styled from './App.module.css';
import Map from './containers/Map/Map';
import CaseUpdater from './containers/CaseUpdater/CaseUpdater'
import Backdrop from './components/backdrop/backdrop';

function App() {
  const [useMobile, setMobile] = useState(false);
  return (
    <div className={styled.app}>
      <Map showBackdrop={() => setMobile(true)} />
      <Backdrop show={useMobile} canceled={() => setMobile(false)} />
      <CaseUpdater />
    </div>
  );
}

export default App;
