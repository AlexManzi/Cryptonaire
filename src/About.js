import React from 'react'

function About() {
  return (
    <>
      <footer className='footer-dark' id="About">
            <div className="container">
                <div className="row">
                    <div  id='founders' className="col-sm-6 col-md-3 item">
                        <h5>Helpful Links</h5>
                        <ul>
                            <li><a href="#">Cryptonaire Soundtrack</a></li>
                            <li><a href="#">Don't be like Larry</a></li>
                            <li><a href="#">Cryptonaire Github</a></li>
                        </ul>
                    </div>
                    <div  id='founders' className="col-sm-6 col-md-3 item">
                        <h5>Meet The Team</h5>
                        <ul>
                            <li><a href="https://github.com/M-Rosenzweig">Moshe</a></li>
                            <li><a href="https://github.com/AlexManzi">Alex</a></li>
                            <li><a href="https://github.com/JohnsonEvan">Evan</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h5>Cryptonaire</h5>
                        <p>We at Cryptonaire believe in the power of Dreams.<br></br>
                        Dreams created the lightbulb, founded the internet, placed men on the moon, and gave birth to Crypto. Please Don't Stop Dreaming. <br></br><br></br>
                        #DreamBigger #ImagineMore #BeFearless 
                        </p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">Cryptonaire © 2022</p>
            </div>
        </footer>
    </>
  )
}

export default About