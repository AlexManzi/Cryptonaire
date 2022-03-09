import React, {useState, useEffect} from 'react';
import PriceFetchManager from './PriceFetchManager';
// import Navbar from './Navbar';
import DreamWallet from './DreamWallet';

import About from './About';
// import ActualWallet from './ActualWallet';



function App() {

  let [cardArray, setCardArray] = useState([])


  useEffect(() => {
    fetch('http://localhost:8001/cryptoCard')
    .then(resp => resp.json())
    .then(card => {
      setCardArray(card)
    })
  }, [])

  


  return (
    <>
      <PriceFetchManager/>
      <DreamWallet cardArray={cardArray}/>
      <About />
    </>
  );
}

export default App;
