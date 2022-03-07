import React from 'react';
import PriceFetchManager from './PriceFetchManager';
// import Navbar from './Navbar';
import DreamWallet from './DreamWallet';

import About from './About';
// import ActualWallet from './ActualWallet';



function App() {
// fetch data here and pass to 



// filter data to get btc and eth prices

// props for navBar and for ActualWallet below 
// btc={btc} eth={eth}
  return (
    <div>
      <PriceFetchManager/>
      <DreamWallet />
      <About />
    </div>
  );
}

export default App;
