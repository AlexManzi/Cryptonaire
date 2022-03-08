import React, {useState,useEffect} from "react"
import Navbar from "./Navbar"
import ActualWallet from "./ActualWallet"
import WelcomeVibes from './WelcomeVibes';

function PriceFetchManager() {

const [data, setData] = useState({
  bitcoin: {
    usd: 98882,
    usd_market_cap: 941491324431.2712,
    usd_24h_change: -9.5155869559448976
  },
  ethereum: {
    usd: 9583.96,
    usd_market_cap: 911302327954.1779,
    usd_24h_change: -9.5155869559448976
  }
}
)

// const defaultPropValue = {
//   bitcoin: {
//     usd: 1,
//   }
// }

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
  console.log(bigData[0].image)
})
// console.log(data)



  return (
   <>
     <Navbar data={data} /> 
    <WelcomeVibes data={data}/>
    <ActualWallet />
    
   </>
  )
}

export default PriceFetchManager