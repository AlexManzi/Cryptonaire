import React from 'react'

function ActualWallet({data, handleBitcoinCalculation, userBitcoinTotal, handleEthereumCalculation, userEthereumTotal}) {
  return (
    <div id="actualWallet">
      <input type="text" id="fname" name="fname" placeholder="Your BTC" onChange={handleBitcoinCalculation}></input>
      <input type="text" id="lname" name="lname" placeholder="Your ETH" onChange={handleEthereumCalculation}></input>
      <p>{userBitcoinTotal}</p>
      <p>{userEthereumTotal}</p>
    </div>
  )
}

export default ActualWallet