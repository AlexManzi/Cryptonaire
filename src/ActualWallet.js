import React from 'react'

function ActualWallet({handleBitcoinCalculation, userBitcoinTotal, handleEthereumCalculation, userEthereumTotal}) {
  let totalBTC = userBitcoinTotal
  let totalETH = userEthereumTotal
  
  let totalWallet = (totalBTC + totalETH)
  return (

    <div id="actualWallet">
      <div id='inputs'>
        <h2 id="walletHeading">Reality Wallet</h2>
        <h3 id="liveCryptoHoldings"> Live Crypto Holdings  </h3>
      

        <label id="actualWalletLabel">Your BTC </label>
        <input type="text" id="userWalletInput" name="fname" placeholder="Enter BTC" onChange={handleBitcoinCalculation}></input>
        <label id="actualWalletLabel">Your ETH </label>
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