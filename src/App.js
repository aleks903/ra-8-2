import React from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import DataComponent from './component/DataComponent.js';
import ErrorComponent from './component/ErrorComponent.js';
import LoadingComponent from './component/LoadingComponent.js';

export default function App() {
  const urlEnv = process.env.REACT_APP_URL;

  return (
    <React.Fragment>
      <DataComponent url={`${urlEnv}data`} />
      <ErrorComponent url={`${urlEnv}error`} />
      <LoadingComponent url={`${urlEnv}loading`} />
    </React.Fragment>
  );
}
