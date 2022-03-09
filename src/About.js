import React from 'react'

function About() {
  return (
    <>
      <footer className='footer-dark'>
            <div className="container">
                <div className="row">
                    <div  id='founders' className="col-sm-6 col-md-3 item">
                        <h3>Helpful Links</h3>
                        <ul>
                            <li><a href="#">Cryptonaire Soundtrack</a></li>
                            <li><a href="#">Don't be like Larry</a></li>
                            <li><a href="#">Cryptonaire Github</a></li>
                        </ul>
                    </div>
                    <div  id='founders' className="col-sm-6 col-md-3 item">
                        <h3>Meet The Team</h3>
                        <ul >
                            <li ><a href="#">Moshe</a></li>
                            <li><a href="#">Alex</a></li>
                            <li><a href="#">Evan</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Cryptonaire</h3>
                      
                        <p>We at Cryptonaire believe in the power of Dreams.<br></br>
                         Dreams have been the source of placing men on the moon, the lightbulb, the internet, and Crypto. Please Don't Stop Dreaming. <br></br><br></br>
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