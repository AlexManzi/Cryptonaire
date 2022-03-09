import React from 'react'

function CryptoCard({card}) {
  console.log(card)
  return (
    <>
 <div id="CryptoCard" className="card">
  <div className="card-body">
    <h5 className="card-title">Name</h5>
    <br></br>
    <p>Something BTC =</p>
    <p> Someting ETH =</p>
    <a id='deletebttn' href="#" className="btn btn-danger btn-sm rounded-0">X</a>
  </div>
</div>
    </>
  )
}

export default CryptoCard