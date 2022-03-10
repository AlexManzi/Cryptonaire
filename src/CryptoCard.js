import React from 'react'

function CryptoCard({card, handleDelete}) {

  return (
    <>
 <div id="CryptoCard" className="card">
  <div className="card-body">
    <h5 className="card-title">{card.name}</h5>
    <br></br>
    <p>{card.DreamBTCAmount} BTC =${card.BTCTotal}</p>
    <p> {card.DreamEthAmount} ETH =${card.EthTotal}</p>
    <a id='deletebttn' href="#" onClick={() => handleDelete(card)}className="btn btn-danger btn-sm rounded-0">X</a>
  </div>
</div>
    </>
  )
}

export default CryptoCard