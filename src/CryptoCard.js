import React from 'react'

function CryptoCard({card, handleDelete}) {
  let btcTotal = card.BTCTotal
  let ethTotal = card.EthTotal
  let grandTotal = card.total

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <>
 <div id="CryptoCard" className="card">
  <div className="card-body">
    <h5 className="card-title">{card.name}</h5>
    <br></br>
    <p>{card.DreamBTCAmount} BTC = {formatter.format(btcTotal)}</p>
    <p> {card.DreamEthAmount} ETH = {formatter.format(ethTotal)}</p>
    <h5 id='cardTotal'>Total = {formatter.format(grandTotal)}</h5>
    <a id='deletebttn' onClick={() => handleDelete(card)}className="btn btn-danger btn-sm rounded-0">X</a>
  </div>
</div>
    </>
  )
}

export default CryptoCard