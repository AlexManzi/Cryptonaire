import React, {useEffect, useState}from 'react';
import Navbar from './Navbar';
import DreamWallet from './DreamWallet';
import WelcomeVibes from './WelcomeVibes';
import About from './About';
import ActualWallet from './ActualWallet';



function App() {
// fetch data here and pass to 
const [data, setData] = useState([])

useEffect(()=> {
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
.then(resp => resp.json())
.then(data => {
  setData(data)
})

},[])

console.log(data);


// filter data to get btc and eth prices

// props for navBar and for ActualWallet below 
// btc={btc} eth={eth}
  return (
    <div>
      <WelcomeVibes />
      <Navbar/>
      <ActualWallet />
      <DreamWallet />
      <About />
    </div>
  );
}

export default App;
