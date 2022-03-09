import React from 'react'
import CryptoCard from './CryptoCard'

function DreamWallet() {
  return (
    <>
      <div id='dreamWallet'> 
        <div id="Form">
          <div id='dreamInputs'>
            <h2 id="DreamWalletHeading">Dream Wallet</h2>
            <h4 id="Dreams"> Anything is Possible  </h4>
          

            <label id="actualWalletLabel"> Your BTC </label>
            <input  type="text" id="userWalletInput" name="fname" placeholder="Enter BTC"></input>
            <label id="actualWalletLabel">Your ETH </label>
            <input type="text" id="userWalletInput" name="lname" placeholder="Enter ETH" onChange={console.log('hey')}></input>
          </div>
          <div id="dollarValueChart">
            <h3>Dollar Value</h3>
            <p> Your Current BTC Holdings $</p>
            <p> Your Current ETH Holdings $</p>
            <h4> Current Wallet Total = $</h4>
          </div>
        </div> 
          <CryptoCard />
      </div>
    </>
  )
}

export default DreamWallet