import React from 'react'

function WelcomeVibes({data}) {

  
  return (
    <div className="container">
     <h1 className="CenterPiece">Cryptonaire</h1>
     <h5 className="CenterPiece">Dream Big</h5>
     <div id="priceBar">
     <h5> BTC = ${data.bitcoin.usd}  </h5>        
     <h5>ETH = ${data.ethereum.usd}</h5>
     </div>

    </div>
  )
}

export default WelcomeVibes