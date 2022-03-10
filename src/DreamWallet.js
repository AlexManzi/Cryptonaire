import React, {useState, useEffect} from 'react'
import {v4 as uuid} from 'uuid'
import CryptoCard from './CryptoCard'

// 

function DreamWallet({cardArray}) {
  const [DreamBTCAmount, setDreamBTCAmount] = useState(null);
  const [BTCPrice, setBTCPrice] = useState(null)
  const [DreamEthAmount, setDreamEthAmount] = useState (null);
  const [EthPrice, setEthPrice] = useState(null);
  let [arrayName, setArrayName] = useState(null)
  let [showArray, setShowArray] = useState([])
  let [newArray, setNewArray] = useState([])
  let BTCTotal = DreamBTCAmount * BTCPrice;
  let EthTotal = DreamEthAmount * EthPrice;
  let TotalValue = EthTotal + BTCTotal

  useEffect(() => {
    fetch('http://localhost:8001/cryptoCard')
    .then(resp => resp.json())
    .then(data => {
      setNewArray(newArray)
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
    console.log(newObj)
    fetch('http://localhost:8001/cryptoCard', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
  })
    .then(resp => resp.json())
    .then(data=>{
      setShowArray([...showArray, data]);
    })
    }

    let mappedArray = showArray.map(card => {
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
    let cardItemIndex = showArray.indexOf(card)
    if(cardItemIndex > -1) {
      let newArray = [...showArray]
      newArray.splice(cardItemIndex, 1)
      setShowArray(newArray)
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
            <h2 id="DreamWalletHeading">Dream Wallet</h2>
            <h4 id="DreamWalletHeading1"> Anything is Possible  </h4>
            <h4 id="actualInfo">Here's where you can visualize the crypto that you're currently Hodling. See where your investments currently stand or envision a path for future saving.</h4>
            <div id='dreamInputs'>
            <input  type="text" id="userWalletInput1" name="fname" placeholder="Enter Your Dream Amount of BTC" onChange={handleDreamBTCBase}></input>
            <input id='userWalletInput1' placeholder='Set Your Dream BTC Price' onChange={handleDreamBTCMultiplication}></input>
            <input type="text" id="userWalletInput2" name="lname" placeholder="Enter Your Dream Amount of ETH" onChange={handleEthBase}></input>
            <input id='userWalletInput2' placeholder='Set Your Dream ETH Price' onChange={handleEthMultiplication}></input>
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
          {newArray}
          {mappedArray}
        </div>
      </div>
      </div> 
    </>
  )
}

export default DreamWallet;