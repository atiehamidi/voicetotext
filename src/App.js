import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <h3>Current Note</h3>
        <button>Save Note</button>
        <button>Start/Stop</button>
      </div>
      <div className="box">
        <h3>Notes</h3>
      </div>
    </div>
  );
}

export default App;
