import React from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import DataComponent from './component/DataComponent.js';

export default function App() {
  const urlEnv = process.env.REACT_APP_URL;

  return (
    <React.Fragment>
      <DataComponent url={`${urlEnv}data`} />
      <DataComponent url={`${urlEnv}error`} />
      <DataComponent url={`${urlEnv}loading`} />
    </React.Fragment>
  );
}
