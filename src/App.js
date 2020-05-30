import React from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import RegisterTask from './components/RegisterTask';

function App() {


  return (
    <div>

      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <RegisterTask />
          </div>

          <div className="col-md-1" />

          <div className="col-md-7 col-xs-12">
            <Board />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
