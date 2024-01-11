import React  from 'react';
import logo from "./logo.png";
import Buyer from './Buyer.js'
import Footer from './Footer';
import '../App.css';
import Header1 from "./Header1";
//,{useState}

export default function Buy(){
    let a="";
    
    return(
      <div>
      <div><Header1/>
      
      <Buyer/>
    
        </div>
      
      <Footer/>
      </div>
    );
    

}