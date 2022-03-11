import React from 'react'
import { Link } from "react-router-dom"




function WelcomeVibes({data}) {

  
  return (
    <div id='container'>
    <h1 className="Cryptonaire">CRYPTONAIRE</h1>
    <h5 className="dreamBig">Dream Bigger</h5>
    

    <div className='leftTitle'>
        <br></br>
        <h3>REIMAGINE YOUR CRYPTO EXPERIENCE</h3>
        <br></br>
        <br></br>
        <h3 id=''>  </h3>
        <Link to="/actualWallet"><button type="button" id='largeWelcomeBttn' className="btn btn-primary btn-lg">Reality</button> </Link>
       <Link to='/dreamWallet'> <button type="button" id='largeWelcomeBttn2'  className="btn btn-secondary btn-lg">Dream</button> </Link>
    <p id='beFearless'>BE FEARLESS</p>
        

    </div>



    </div>
  )
}

export default WelcomeVibes