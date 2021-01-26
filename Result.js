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
import {App} from './';
import Webcam from "react-webcam";
import icon_blue from './img/icon_blue.png';
import icon_red from './img/icon_red.png';
import icon_white from './img/icon_white.png';
import item from './App.js';
const WebcamComponent = () => <Webcam />;


const key = 1;

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

class Result extends Component{

state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render(){
    return(
        <div>
         <section className="about_us single_about_padding">
                <div className="container">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 col-lg-6">
                      <div className="about_us_img">
                      <Webcam
                      autoPlay
                      playsInline
                      muted={true}
                      width="600"
                      height="534"/>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <div className="about_us_text">
                       <div>{this.state.posts.map(item => (

                       <div>

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                        {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<img src= {icon_blue} alt="pic"/>)
                       }
                       }else if(item.content ==1 ){
                          return(<img src= {icon_red} alt="pic" />)
                       }else if(item.content ==2 ){
                          return(<img src= {icon_white} alt="pic" />)
                       }})()}

                       {(function(){
                       if(item.content == 0){{
                          return(<h2>~~~comporatble~~~</h2>)
                       }
                       }else if(item.content ==1 ){
                          return(<h2>!!! accident occur !!!</h2>)
                       }else if(item.content ==2 ){
                       document.body.style.background='red'
                          return(<h2>!!! EMERGENCY !!!</h2>)
                       }})()} </div>))}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* about us part end*/}
              {/* our depertment part start*/}
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
}

export default Result;