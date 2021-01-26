
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
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home, Result } from './'


class App extends Component{
    render(){
        return(
             <Router>
                    <div>
                      <header className="main_menu home_menu">
                              <div className="container">
                                <div className="row align-items-center">
                                  <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                      <a className="navbar-brand" href=""> {<img src={logo} alt="logo" />} </a>

                                      <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                                        <ul className="navbar-nav align-items-center">
                                          <li className="nav-item active">
                                           <Link to="/">Home</Link>
                                          </li>
                                          <li className="nav-item">
                                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/result">Result</Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </header>

                      <Route exact path='/' component={Home}/>
                      <Route path='/result' component={Result}/>
                    </div>
                  </Router>
        );
    }
}

export default App;
