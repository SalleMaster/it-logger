import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import 'materialize-css/dist/css/materialize.min.css';
import Logs from './components/logs/Logs';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
