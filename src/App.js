import React from 'react';
import DreamWallet from './DreamWallet';
import PriceFetchManager from './PriceFetchManager';
import WelcomeVibes from './WelcomeVibes';
import About from './About';

function App() {
  return (
    <div>
      <WelcomeVibes />
      <PriceFetchManager />
      <DreamWallet />
      <About />
    </div>
  );
}

export default App;
