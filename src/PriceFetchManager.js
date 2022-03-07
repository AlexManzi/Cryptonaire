import React, {useState,useEffect} from "react"
import Navbar from "./Navbar"
import ActualWallet from "./ActualWallet"
import WelcomeVibes from './WelcomeVibes';

function PriceFetchManager() {
  const [data, setData] = useState([])

useEffect(()=> {
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
.then(resp => resp.json())
.then(data => {
  setData(data)
})

},[])

console.log(data);

  return (
   <div>
     <Navbar />
    <WelcomeVibes/>
    <ActualWallet />
    
   </div>
  )
}

export default PriceFetchManager