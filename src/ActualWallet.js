import React from 'react'


function ActualWallet({ data, handleBitcoinCalculation, userBitcoinTotal, handleEthereumCalculation, userEthereumTotal}) {
  let totalBTC = userBitcoinTotal
  let totalETH = userEthereumTotal

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // console.log(data.bitcoin.usd_market_cap)
  
  let totalWallet = (totalBTC + totalETH)
  return (
    

    <div id="actualWallet">
      <style>
      </style>
      <h2 id="walletHeading">REALITY WALLET</h2>
        <h3 id="liveCryptoHoldings"> Your Live Crypto Holdings  </h3>
        <h4 id="actualInfo">Here's where you can visualize the crypto that you're currently Hodling</h4><h4 id="actualInfo">See where your investments currently stand or envision a path for future saving.</h4>
        <h3 id="amountHeading">The Amount of Coins you're holding</h3>
        <h3 id="actualHeading">The Current Dollar Value of those Coins</h3>
      <div id='inputs'>
        <input type="text" id="userWalletInput" name="fname" placeholder="Enter Your BTC" onChange={handleBitcoinCalculation}></input>
        <input type="text" id="userWalletInput" name="lname" placeholder="Enter Your ETH" onChange={handleEthereumCalculation}></input>
      </div>
      <div id="actualDollarValueChart" className="dollarValueChart">
        <p id="walletText"> Your Current BTC Holdings are {formatter.format(totalBTC)}</p>
        <p id="walletText"> Your Current ETH Holdings are {formatter.format(totalETH)}</p>
        <h4 id="walletText"> <strong>The Current Value of Your Wallet is {formatter.format(totalWallet)}</strong></h4>
      </div>


    </div>
  )
}

export default ActualWallet