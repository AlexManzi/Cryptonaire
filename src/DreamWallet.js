import React, {useState} from 'react'
import CryptoCard from './CryptoCard'

// 

function DreamWallet() {
  const [DreamBTCAmount, setDreamBTCAmount] = useState(null);
  const [BTCPrice, setBTCPrice] = useState('')

  function handleDreamBTCBase (event) {
    setDreamBTCAmount(event.target.value)

  }

  function handleDreamBTCMultiplication (event) {
   setBTCPrice(event.target.value) 
  }

  let BTCTotal = DreamBTCAmount * BTCPrice;
  console.log(DreamBTCAmount);
  console.log(BTCPrice);


  function handleDreamETH (event) {
    // we set the value of amount
  }

  return (
    <>
      <div id='dreamWallet'> 
        <div id="Form">
          <div id='dreamInputs'>
            <h2 id="DreamWalletHeading">Dream Wallet</h2>
            <h4 id="Dreams"> Anything is Possible  </h4>
          

            <label id="actualWalletLabel"> Your BTC </label>
            <input  type="text" id="userWalletInput" name="fname" placeholder="Enter BTC" onChange={handleDreamBTCBase}></input>
            <label id='DreamBTCLabel'>Dream Price </label>
            <input id='DreamBTCInput' placeholder='set the price..' onChange={handleDreamBTCMultiplication}></input>
            <label id="actualWalletLabel">Your ETH </label>
            <input type="text" id="userWalletInput" name="lname" placeholder="Enter ETH" ></input>
          </div>
          <div id="dollarValueChart">
            <h3>Dollar Value</h3>
            <p> Your Current BTC Holdings ${BTCTotal}</p>
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