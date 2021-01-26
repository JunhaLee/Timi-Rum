import './css/bootstrap.min.css';
import './css/animate.css';
//import './css/owl.carousel.min.css'
//import './css/themify-icons.css'
//import './css/flaticon.css'
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/slick.css';
import './css/style.css';
import React, {Component} from 'react';
import logo from './img/logo.png';
import banner from'./img/banner_img.png';
const Home = () =>{
    return(
        <div>

      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h2>Falling Accident Response System for the Elderly people</h2>
                  <p>As the number of single-person elderly households increases these days, there are many cases in which the situation worsens as appropriate measures are not taken in the event of falls.
                    <br /><br />
                    The project is carried out with the aim of developing a response system that can detect and report in the event of a fall accident.</p>
                  <a href="Result" className="btn_2">Go to show result</a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner_img">
                {<img src={banner} alt="" />}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner part start*/}
      {/* about us part start*/}
      <div className="copyright_part">
        <div className="container">
          <div className="row align-items-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Home;