import React from 'react'

function ActualWallet({data, handleBitcoinCalculation, userBitcoinTotal, handleEthereumCalculation, userEthereumTotal}) {
  let totalBTC = userBitcoinTotal
  let totalETH = userEthereumTotal
  
  let totalWallet = (totalBTC + totalETH)
  return (

    <div id="actualWallet">
      <h2 id="walletHeading">Your Actual Wallet</h2>
      <h3 id="walletHeading">Here is a place for you to visualize all the amount of crypto that you have in your wallet </h3>
      <label id="actualWalletLabel">Enter the Amount of Bitcoin in your Wallet Here!</label>
      <input type="text" id="userWalletInput" name="fname" placeholder="Your BTC" onChange={handleBitcoinCalculation}></input>
      <label id="actualWalletLabel">Enter the Amount of Ethereum in your Wallet Here!</label>
      <input type="text" id="userWalletInput" name="lname" placeholder="Your ETH" onChange={handleEthereumCalculation}></input>
      <div id="dollarValueChart">
        <h3>Dollar Value</h3>
        <p>Your Current Amount of Bitcoin in Dollars is ${userBitcoinTotal}</p>
        <p>Your Current Amount of Ethereum in Dollars is ${userEthereumTotal}</p>
        <h4>The total value of your Defi Wallet is ${totalWallet}</h4>
        <img src="https://blog.crypto.com/content/images/size/w1600/2022/01/220112-Header-Banner.png" id="globePic" alt="bgpic"/>
      </div>
    </div>
  )
}

export default ActualWallet