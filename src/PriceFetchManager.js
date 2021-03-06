import React, {useState,useEffect} from "react"
import Navbar from "./Navbar"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ActualWallet from "./ActualWallet"
import WelcomeVibes from './WelcomeVibes';
import DreamWallet from './DreamWallet';
import About from "./About";



function PriceFetchManager() {

const [data, setData] = useState({
  bitcoin: {
    usd: 0,
    usd_market_cap: 941491324431.2712,
    usd_24h_change: -9.5155869559448976
  },
  ethereum: {
    usd: 0,
    usd_market_cap: 911302327954.1779,
    usd_24h_change: -9.5155869559448976
  }
})
let [userBitcoin, setUserBitcoin] = useState(null)
let [userEthereum, setUserEthereum] = useState(null)

let bitcoinHelper = data.bitcoin.usd
let ethereumHelper = data.ethereum.usd


useEffect(()=> {
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
.then(resp => resp.json())
.then(data => {
  setData(data)
})

},[])

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
.then(resp => resp.json())
.then(bigData => {
  // console.log(bigData[0].image)
})




function handleBitcoinCalculation(event) {
  const userValue = event.target.value;
  setUserBitcoin(userValue * bitcoinHelper)
}

function handleEthereumCalculation(event) {
  const userValue = event.target.value;
  setUserEthereum(userValue * ethereumHelper)
}

const [page, setPage] = useState("/")


  return (
  <>
  <Navbar data={data} /> 

  <Switch>
    
      <Route  exact path="/">
          <WelcomeVibes data={data}/>
        </Route>
                  
        <Route path="/actualWallet">
            <ActualWallet data={data} handleBitcoinCalculation={handleBitcoinCalculation} userBitcoinTotal={userBitcoin} handleEthereumCalculation={handleEthereumCalculation} userEthereumTotal={userEthereum}/>    
        </Route>

        <Route path="/dreamWallet">
            <DreamWallet/>
        </Route>

        <Route path="/about">
            <About /> 
        </Route>
                  
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
            
  </Switch>
  </>
  )
}

export default PriceFetchManager