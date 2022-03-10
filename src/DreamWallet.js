import React, {useState, useEffect} from 'react'
import {v4 as uuid} from 'uuid'
import CryptoCard from './CryptoCard'

// 

function DreamWallet({}) {
  const [DreamBTCAmount, setDreamBTCAmount] = useState(null);
  const [BTCPrice, setBTCPrice] = useState(null)
  const [DreamEthAmount, setDreamEthAmount] = useState (null);
  const [EthPrice, setEthPrice] = useState(null);
  let [arrayName, setArrayName] = useState(null)
  let BTCTotal = DreamBTCAmount * BTCPrice;
  let EthTotal = DreamEthAmount * EthPrice;
  let TotalValue = EthTotal + BTCTotal

  let [cardArray, setCardArray] = useState([])


  useEffect(() => {
    fetch('http://localhost:8001/cryptoCard')
    .then(resp => resp.json())
    .then(card => {
      setCardArray(card)
    })
  }, [])


  function handleAddToJson() {
    console.log("hello")
    let newObj = {
      id: uuid(),
      DreamEthAmount: DreamEthAmount,
      DreamBTCAmount: DreamBTCAmount,
      EthTotal: EthTotal,
      BTCTotal: BTCTotal,
      name: arrayName
    }
    fetch('http://localhost:8001/cryptoCard', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
  })
    .then(resp => resp.json())
    .then(data=>{
      setCardArray([...cardArray, data]);
    })
    }

    

    let mappedArray = cardArray.map(card => {
      return (
        <CryptoCard 
        key={card.id}
        card={card}
        handleDelete={handleDelete}
        />
      )
    })

    function handleDelete(card) {
      fetch('http://localhost:8001/cryptoCard/'+card.id, {
        method: "DELETE",
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
        },
    })
    let cardItemIndex = cardArray.indexOf(card)
    if(cardItemIndex > -1) {
      let newArray = [...cardArray]
      newArray.splice(cardItemIndex, 1)
      setCardArray(newArray)
    }
    }


  function handleDreamBTCBase (event) {
    setDreamBTCAmount(event.target.value)
  }

  function handleDreamBTCMultiplication (event) {
  setBTCPrice(event.target.value) 
  }

  function handleEthBase (event) {
    setDreamEthAmount(event.target.value);

  }

  function handleEthMultiplication (event) {
    setEthPrice(event.target.value);
  }

  function addNameToArray(event) {
    setArrayName(event.target.value)
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
            <input type="text" id="userWalletInput" name="lname" placeholder="Enter ETH" onChange={handleEthBase}></input>
            <label id='DreamBTCLabel'>Dream Price </label>
            <input id='DreamBTCInput' placeholder='set the price..' onChange={handleEthMultiplication}></input>
          </div>
        </div> 

        <div id="dreamDollarValueChart">
            <h3>Dollar Value</h3>
            <p> Your Current BTC Holdings <br></br>${BTCTotal}</p>
            <p> Your Current ETH Holdings <br></br> ${EthTotal}</p>
            <h4> Current Wallet Total = ${TotalValue}</h4>
            
              <label className='Name'>Name of Portfolio  </label> 
              <input className='Name' type='text' placeholder='Name me' onChange={addNameToArray} id='inputPortfolioName'></input>
              <br /><br />
              <button className='btn btn-primary' onClick={handleAddToJson}>Create Card</button>
        </div>
        <div>
          {mappedArray}
        </div>
      </div>
    </>
  )
}

export default DreamWallet;