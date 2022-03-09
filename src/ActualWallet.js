import React from 'react'

function ActualWallet({ data, handleBitcoinCalculation, userBitcoinTotal, handleEthereumCalculation, userEthereumTotal}) {
  let totalBTC = userBitcoinTotal
  let totalETH = userEthereumTotal

  console.log(data.bitcoin.usd_market_cap)
  
  let totalWallet = (totalBTC + totalETH)
  return (

    <div id="actualWallet">
      <h2 id="walletHeading">Reality Wallet</h2>
        <h3 id="liveCryptoHoldings"> Live Crypto Holdings  </h3>
        <h4>Here's where you can visualize the crypto that you're currently Hodling. See where your investments currently stand or envision a path for future saving.</h4>
      <div id='inputs'>
        <input type="text" id="userWalletInput" name="fname" placeholder="Enter BTC" onChange={handleBitcoinCalculation}></input>
        <input type="text" id="userWalletInput" name="lname" placeholder="Enter ETH" onChange={handleEthereumCalculation}></input>
      </div>
      <div id="dollarValueChart">
        <h3>Dollar Value</h3>
        <p> Your Current BTC Holdings <br></br> ${userBitcoinTotal}</p>
        <p> Your Current ETH Holdings <br></br> ${userEthereumTotal}</p>
        <h4> Current Wallet Total = <br></br>
        ${totalWallet}</h4>
      </div>

    



    </div>
  )
}

export default ActualWallet