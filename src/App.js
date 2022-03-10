import React, {useState, useEffect} from 'react';
import PriceFetchManager from './PriceFetchManager';
// import Navbar from './Navbar';
import DreamWallet from './DreamWallet';

import About from './About';
// import ActualWallet from './ActualWallet';



function App() {



  


  return (
    <>
      <PriceFetchManager/>
      <DreamWallet/>
      <About />
    </>
  );
}

export default App;
