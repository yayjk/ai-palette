import React from 'react';
import { GraphContainer } from './components/GraphContainer';
import Header from './components/Header';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="App">
      <Header />
      <GraphContainer />
      <Recommendations />
    </div>
  );
}

export default App;
